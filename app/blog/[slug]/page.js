/* eslint-disable no-undef */
'use client';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Container, HeroPage } from '../../components/Foundation';
import { getPost } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Post() {
  const [content, setContent] = useState({});
  const [data, setData] = useState({});
  const path = usePathname().slice(6);
  useQuery(getPost, {
    variables: { slug: path },
    onCompleted: async (data) => {
      setContent(
        await serialize(data?.blogPosts?.data[0]?.attributes?.content)
      );
      setData(data?.blogPosts?.data[0]?.attributes);
    }
  });
  // const serializeContent = serialize(
  //   data?.blogPosts?.data[0]?.attributes?.content
  // );
  console.log(content);

  return (
    <main>
      <HeroPage arrow={false} cta={false} mini={true} uri="/bg-blog.svg" />
      <Container newClasses="py-24">
        <div className="col-span-2 flex items-center">
          <FontAwesomeIcon
            className="text-custom-orange"
            icon={faChevronLeft}
          />
          <Link className="font-sans text-sm text-soft-gray" href="">
            voltar para o blog
          </Link>
        </div>
        <div className="col-span-10">
          <p>Escrito por Sempre Tecnologia, {data?.updatedAt}</p>
        </div>
        <h1 className="col-span-12 font-serif font-bold text-center text-dark-blue text-5xl">
          {data?.title}
        </h1>
        <div className="col-span-12 flex justify-center">
          <img
            alt={data?.title}
            src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.image?.data?.attributes?.url}`}
          />
        </div>
        <div className="col-span-12">
          <MDXRemote {...content} />
        </div>
      </Container>
    </main>
  );
}
