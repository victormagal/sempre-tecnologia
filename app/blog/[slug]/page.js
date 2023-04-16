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
import { GET_POST } from '../../graphql/queries';
import { useQuery } from '@apollo/client';

export default function Post() {
  const path = usePathname().slice(6);
  const { data } = useQuery(GET_POST, { variables: { slug: path } });

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
          <h1>{data?.blogPosts?.data[0]?.attributes?.title}</h1>
          <p>{data?.blogPosts?.data[0]?.attributes?.content}</p>
        </Container>
        <Testimony />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
