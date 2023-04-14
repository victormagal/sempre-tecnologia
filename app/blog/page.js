'use client';
import Link from 'next/link';
import { use } from 'react';
import { Testimony } from '../components/Elements';
import {
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';
import { GET_ALL_POSTS } from '../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export default function Blog() {
  const {
    blogPosts: { data: posts }
  } = use(getData());
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
          {posts.map((post, i) => (
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

async function getData() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS
  });

  return data;
}
