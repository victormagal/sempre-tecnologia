'use client';
import Link from 'next/link';
import { SideBar, Testimony } from '../components/Elements';
import {
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';
import { getAllPosts } from '../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Blog() {
  const { data } = useQuery(getAllPosts);

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
          <div className="col-span-8 grid grid-cols-12 gap-8">
            {data?.blogPosts?.data?.map((post, i) => (
              <Link
                className="col-span-6"
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
          </div>
          <div className="col-span-4">
            <SideBar />
          </div>
        </Container>
        <Testimony />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
