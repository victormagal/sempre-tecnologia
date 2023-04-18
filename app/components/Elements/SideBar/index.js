'use client';
import Link from 'next/link';
import { getAllCategories } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';

export default function SideBar() {
  const { data } = useQuery(getAllCategories);
  console.log(data);

  return (
    <div>
      {data?.categories?.data?.map((category, i) => (
        <Link
          className="block"
          key={i}
          href={`category/${category.attributes.slug}`}
        >
          {category.attributes.name}
        </Link>
      ))}
    </div>
  );
}
