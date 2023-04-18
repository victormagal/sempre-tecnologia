'use client';
import { usePathname } from 'next/navigation';
import { Testimony } from '../../components/Elements';
import {
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../../components/Foundation';
import { getPostsByCategory } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Category() {
  const path = usePathname().slice(10);
  const { data } = useQuery(getPostsByCategory, {
    variables: { category: path }
  });

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
            <div key={i}>
              <h1>{post.attributes.title}</h1>
              <p>{post.attributes.content}</p>
            </div>
          ))}
        </Container>
        <Testimony />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
