/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { getAllPosts } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function LastPosts() {
  const { data } = useQuery(getAllPosts, {
    variables: {
      page: 1,
      pageSize: 4
    }
  });

  return (
    <>
      {data?.blogPosts?.data.map((post, i) => (
        <Link
          className="bg-white col-span-4 lg:col-span-3 drop-shadow"
          key={i}
          href={`blog/${post.attributes.slug}`}
        >
          <img
            alt={post.attributes.title}
            src={`${post?.attributes?.image?.data?.attributes?.url}`}
          />
          <div className="p-10">
            <h1
              style={{ color: '#A92321' }}
              className="font-sans font-bold mb-4"
            >
              {post?.attributes?.category?.data?.attributes?.name}
            </h1>
            <p className="font-sans text-gray-600">{post?.attributes?.title}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
