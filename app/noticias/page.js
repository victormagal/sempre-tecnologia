/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SideBar } from '../components/Elements';
import { Container, HeroPage } from '../components/Foundation';
import { getAllPosts } from '../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const listPages = [];

  const [getPosts, { data }] = useLazyQuery(getAllPosts);

  useEffect(() => {
    getPosts({
      variables: {
        page: currentPage,
        pageSize: pageSize
      }
    });
  }, []);

  const previousPosts = () => {
    const newValue = currentPage - 1;

    if (newValue <= 0) {
      setCurrentPage(1);
    } else {
      getPosts({
        variables: {
          page: newValue,
          pageSize: pageSize
        }
      });
      setCurrentPage(newValue);
    }
  };

  const nextPosts = () => {
    const newValue = currentPage + 1;

    if (newValue > data?.blogPosts?.meta?.pagination?.pageCount) {
      setCurrentPage(data?.blogPosts?.meta?.pagination?.pageCount);
    } else {
      getPosts({
        variables: {
          page: newValue,
          pageSize: pageSize
        }
      });
      setCurrentPage(newValue);
    }
  };

  const goToPage = (e) => {
    const value = Number(e.target.innerHTML);

    if (currentPage !== value) {
      getPosts({
        variables: {
          page: value,
          pageSize: pageSize
        }
      });
      setCurrentPage(value);
    }
  };

  for (let i = 1; i <= data?.blogPosts?.meta?.pagination?.pageCount; i++) {
    listPages.push(i);
  }

  return (
    <main>
      <HeroPage
        arrow={true}
        cta={false}
        title="Blog Sempre Tecnologia"
        uri="/bg-blog.svg"
      />
      <Container newClasses="py-24">
        <div className="col-span-4 lg:col-span-8 grid lg:grid-cols-12 grid-cols-4 gap-8">
          {data?.blogPosts?.data?.map((post, i) => (
            <Link
              className="bg-white col-span-4 lg:col-span-6 drop-shadow"
              key={i}
              href={`/${post.attributes.slug}`}
            >
              {post?.attributes?.image?.data?.attributes?.url && (
                <img
                  alt={post.attributes.title}
                  src={`${post?.attributes?.image?.data?.attributes?.url}`}
                />
              )}
              <div className="-mt-3 px-10 pb-10">
                <span className="bg-dark-blue font-sans -mt-8 px-6 py-1 rounded-full text-sm text-white uppercase">
                  {post?.attributes?.category?.data?.attributes?.name}
                </span>
                <h1 className="font-serif font-semibold mt-6 text-dark-blue text-2xl">
                  {post.attributes.title}
                </h1>
                <h2 className="font-sans font-semibold mt-2 text-sm text-custom-orange">
                  {new Date(post?.attributes?.updatedAt).toLocaleDateString(
                    'pt-BR'
                  )}
                </h2>
                <p className="font-sans mt-6 text-soft-gray">
                  {post?.attributes?.description}
                </p>
              </div>
            </Link>
          ))}
          {data?.blogPosts?.meta?.pagination?.pageCount > 1 && (
            <div className="col-span-12">
              <ul className="flex items-center justify-center space-x-2">
                <li
                  className="cursor-pointer flex items-center font-sans text-sm text-dark-blue"
                  onClick={previousPosts}
                >
                  <FontAwesomeIcon
                    className="text-dark-blue h-2 w-2 mr-1"
                    icon={faAnglesLeft}
                  />
                  Anterior
                </li>
                {listPages.map((page) => (
                  <li
                    key={page}
                    className={`cursor-pointer font-sans font-semibold px-2 py-1 text-sm text-dark-blue ${
                      currentPage === page && 'border border-dark-blue rounded'
                    }`}
                    onClick={goToPage}
                  >
                    {page}
                  </li>
                ))}
                <li
                  className="cursor-pointer flex items-center font-sans text-sm text-dark-blue"
                  onClick={nextPosts}
                >
                  Próximo
                  <FontAwesomeIcon
                    className="text-dark-blue h-2 w-2 ml-1"
                    icon={faAnglesRight}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="col-span-4">
          <SideBar />
        </div>
      </Container>
    </main>
  );
}
