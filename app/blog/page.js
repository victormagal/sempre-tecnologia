/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { SideBar } from '../components/Elements';
import { Container, HeroPage } from '../components/Foundation';
import { getAllPosts } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Blog() {
  const { data } = useQuery(getAllPosts);

  return (
    <main>
      <HeroPage
        arrow={true}
        cta={false}
        title="Blog Sempre Tecnologia"
        uri="/bg-blog.svg"
      />
      <Container newClasses="py-24">
        <div className="col-span-8 grid grid-cols-12 gap-8">
          {data?.blogPosts?.data?.map((post, i) => (
            <Link
              className="bg-white col-span-6 drop-shadow"
              key={i}
              href={`blog/${post.attributes.slug}`}
            >
              <img
                alt={post.attributes.title}
                src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${post?.attributes?.image?.data?.attributes?.url}`}
              />
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
        </div>
        <div className="col-span-3 col-end-13">
          <SideBar />
        </div>
      </Container>
    </main>
  );
}
