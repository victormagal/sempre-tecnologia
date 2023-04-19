import Image from 'next/image';
import Link from 'next/link';
import { LastPosts, Testimony } from './components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage
} from './components/Foundation';

export default function Home() {
  return (
    <>
      <HeroPage
        arrow={false}
        cta={true}
        description="Empresário e gestor que tem recebíveis recorrentes, nós temos funcionalidades que agilizarão seu dia a dia."
        iconSource="/icon-sempre-mensalidade.svg"
        title="Gestão de mensalidades"
        uri="/bg-sempre-mensalidade.jpg"
      />
      <section style={{ backgroundColor: '#F8F8F8' }} className="py-6">
        <Container>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              95%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Pós-Venda
            </h2>
          </div>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              98%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Suporte Técnico a Sistemas
            </h2>
          </div>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              85%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Certificado Digital
            </h2>
          </div>
        </Container>
      </section>
      <Container newClasses="py-24">
        <div className="col-span-5 flex flex-col justify-center">
          <h2 className="font-serif font-semibold text-dark-blue uppercase">
            Quem somos
          </h2>
          <h1 className="font-serif font-bold my-4 text-dark-blue text-4xl">
            Olá, somos a Sempre Tecnologia.
          </h1>
          <Image
            alt="Sempre mensalidade"
            height={81}
            quality={100}
            src="/play-circle.svg"
            width={81}
          />
        </div>
        <div className="col-span-6 col-end-13">
          <p className="font-sans text-soft-gray mb-8">
            Somos uma empresa especializada em desenvolver sistemas com
            tecnologia própria em plataforma web, gerando mobilidade e segurança
            da informação para nossos clientes. Temos vasta experiência em
            soluções simples e práticas. Atualmente milhares de empresas de
            diversos segmentos utilizam os nossos sistemas.
          </p>
          <p className="font-sans text-soft-gray">
            Além do compromisso com atendimento, temos uma estrutura
            diferenciada, com equipe treinada para implantação e suporte em
            sistemas para micro, pequenas e médias empresas. Credenciada pelo
            Governo Federal, emitimos certificado digital padrão ICP Brasil.
            Nossa matriz está localizada no SIA, em Brasília, além de outras
            filiais no DF, GO, TO, sede em Goiânia, Palmas e Distribuidores no
            Brasil.
          </p>
        </div>
      </Container>
      <Testimony />
      <BackgroundContainer uri="/bg-agenda.jpg">
        <div className="col-span-6 col-start-4 flex flex-col items-center">
          <h1 className="font-serif font-semibold text-white text-4xl">
            Seja SEMPRE!
          </h1>
          <p className="font-sans my-8 text-white text-center">
            Venha para a Sempre Tecnologia. Nós desenvolvemos sistemas que vão
            alavancar o seu negócio. Deixe seus dados, entraremos em contato!
          </p>
          <button
            className="border border-white font-sans font-bold py-4 text-sm text-white rounded w-2/4"
            type="button"
          >
            Agenda um horário
          </button>
        </div>
      </BackgroundContainer>
      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <Container>
          <div className="col-span-10 mb-6">
            <h1 className="font-serif font-semibold text-4xl text-dark-blue">
              Veja os últimos conteúdos do nosso Blog
            </h1>
          </div>
          <div className="col-span-2 flex justify-end mb-6">
            <Link
              className="bg-custom-red font-sans font-bold py-4 rounded text-center text-xs text-white uppercase w-2/3"
              href="/blog"
            >
              Ver mais
            </Link>
          </div>
          <LastPosts />
        </Container>
      </section>
    </>
  );
}
