'use client';
import { use } from 'react';
import { Testimony } from '../../components/Elements';
import {
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../../components/Foundation';
import { GET_ALL_SLUGS, GET_POST } from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

export default function Post({ params }) {
  const {
    data: {
      blogPosts: { data }
    }
  } = use(
    client.query({
      query: GET_POST,
      variables: { slug: params.slug }
    })
  );

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
          <h1>{data[0]?.attributes?.title}</h1>
          <p>{data[0]?.attributes?.content}</p>
        </Container>
        <Testimony />
        <Locations />
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const {
    data: {
      blogPosts: { data }
    }
  } = await client.query({
    query: GET_ALL_SLUGS
  });

  const paths = data.map((post) => {
    return { params: { slug: post.attributes.slug } };
  });

  return paths;
}
