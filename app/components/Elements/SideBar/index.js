'use client';
import Link from 'next/link';
import { getAllCategories } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SideBar() {
  const { data } = useQuery(getAllCategories);

  return (
    <>
      <div className="bg-white rounded-xl drop-shadow p-8">
        <h1 className="border-b font-serif font-bold pb-4 text-2xl text-dark-blue">
          Filtre por categoria
        </h1>
        <ul>
          {data?.categories?.data?.map((category, i) => (
            <Link key={i} href={`category/${category.attributes.slug}`}>
              <li className="font-sans mt-4 text-lg text-soft-gray">
                {category.attributes.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="bg-dark-blue rounded-xl mt-6 p-10 flex flex-col items-center">
        <h1 className="font-serif font-bold text-xl text-white">
          Siga nas redes sociais
        </h1>
        <ul className="flex space-x-4 mt-4">
          <li>
            <a
              href="https://www.facebook.com/sempretecnologia/"
              target="_blank"
              title="Facebook"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="h-6 text-white"
                icon={faFacebookSquare}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/sempre-tecnologia/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-6 text-white" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sempretecnologia/"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-6 text-white" icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
