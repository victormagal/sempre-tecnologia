'use client';
import Link from 'next/link';
import { Testimony } from '../components/Elements';
import {
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';
import { GET_ALL_POSTS } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Blog() {
  const { data } = useQuery(GET_ALL_POSTS);

  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Do mais simples ao mais complexo fazemos todo o cálculo tributário para você."
          iconSource="/icon-emissor-nota.svg"
          title="Emita Notas Eletrônicas"
          uri="/bg-emissor-nota.jpg"
        />
        <Container newClasses="py-24">
          {data?.blogPosts?.data?.map((post, i) => (
            <Link
              className="col-span-4"
              key={i}
              href={`blog/${post.attributes.slug}`}
            >
              <div>
                <h1 className="font-serif font-semibold text-2xl">
                  {post.attributes.title}
                </h1>
                <p className="font-sans">{post.attributes.description}</p>
              </div>
            </Link>
          ))}
        </Container>
        <Testimony />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
