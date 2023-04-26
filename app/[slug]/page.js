/* eslint-disable no-undef */
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './page.module.css';
import { Container, HeroPage } from '../components/Foundation';
import { getPost } from '../graphql/queries';
import { LastPosts } from '@/app/components/Elements';
import { useQuery } from '@apollo/client';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MarkdownIt from 'markdown-it';

export default function Post() {
  const router = useRouter();
  const md = new MarkdownIt();
  const [content, setContent] = useState();
  const [data, setData] = useState({});
  const path = usePathname().slice(1);
  console.log(path);
  useQuery(getPost, {
    variables: { slug: path },
    onCompleted: (data) => {
      setContent(md.render(data?.blogPosts?.data[0]?.attributes?.content));
      setData(data?.blogPosts?.data[0]?.attributes);
    }
  });

  return (
    <main>
      <HeroPage arrow={false} cta={false} mini={true} uri="/bg-blog.svg" />
      <Container newClasses="py-24">
        <header className="border-b col-span-12 grid grid-cols-12 gap-6 pb-4">
          <div className="col-span-2 flex items-center">
            <FontAwesomeIcon
              className="text-custom-orange"
              icon={faChevronLeft}
            />
            <Link
              className="font-sans ml-4 text-sm text-soft-gray"
              href=""
              onClick={() => router.back()}
            >
              voltar para o blog
            </Link>
          </div>
          <div className="col-span-10 flex justify-end">
            <p className="font-sans text-sm text-soft-gray">
              Escrito por Sempre Tecnologia,{' '}
              {new Date(data?.updatedAt).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </p>
          </div>
        </header>
        <h1 className="col-span-8 col-start-3 font-serif font-bold my-8 text-center text-dark-blue text-5xl">
          {data?.title}
        </h1>
        <div className="col-span-8 col-start-3 flex justify-center mb-8">
          <img
            alt={data?.title}
            src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${data?.image?.data?.attributes?.url}`}
          />
        </div>
        <div
          className={`${styles.content} col-span-8 col-start-3`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
      <section style={{ backgroundColor: '#F8F8F8' }}>
        <Container newClasses="py-24">
          <LastPosts />
        </Container>
      </section>
    </main>
  );
}
