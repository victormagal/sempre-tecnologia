import Image from 'next/image';
import styles from './page.module.css';
import {
  Card,
  ColoredCard,
  Doubts,
  PlayCard,
  Testimony,
  TransparentCard
} from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  Footer,
  Header,
  HeroPage,
  Locations
} from '../components/Foundation';
import { doubts } from './data';

export default function SempreMDistribuidor() {
  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Quer um Sistema de Gestão específico para você?"
          iconSource="/icon-sempre-distribuidor.svg"
          theme="blue"
          title="Olá distribuidor"
          uri="/bg-sempre-distribuidor.jpg"
        />
        <Container newClasses="py-24">
          <div className="col-span-5">
            <PlayCard bgImage="/bg-play-sempre-distribuidor.svg" />
          </div>
          <div className="col-span-4 flex flex-col justify-center">
            <Image
              alt="Sempre mensalidade"
              height={24}
              quality={100}
              src="/title-sempre-distribuidor.svg"
              width={202}
            />
            <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
              Otimize seus processos
            </h1>
            <p className="mt-6 text-soft-gray">
              Automatize tarefas e agilize processos internos da sua empresa com
              uma solução prática e fácil de usar. Simplificamos o controle do
              faturamento e logística de transporte da sua distribuição.
            </p>
            <button
              className={`${styles.orange} font-sans font-bold mt-6 py-2 rounded text-sm w-1/2`}
            >
              Fale agora
            </button>
          </div>
        </Container>
        <Container newClasses="pb-24">
          <TransparentCard
            description="Gerencie tarefas cotidianas com soluções que foram pensadas para empreendedores que querem crescer seu negócio."
            imageSource="/icon-distribuidor-1.svg"
            title="Ganhe forças com nossas funcionalidades"
          />
          <Card
            description="Gestão de faturamento, de estoque e financeiro, com controle logístico para distribuição, carregamento, conferência e controle de entregas."
            imageSource="/icon-distribuidor-2.svg"
            title="Gestão"
          />
          <Card
            description="A solução possibilita a empresa receber pedidos via app mobile, além de ter acesso a todo o histórico do cliente."
            imageSource="/icon-distribuidor-3.svg"
            title="App"
          />
          <Card
            description="A Manifestação do Destinatário Eletrônico permite visualizar as notas emitidas contra o seu CNPJ."
            imageSource="/icon-distribuidor-4.svg"
            title="MD-e ativo"
          />
          <Card
            description="Junte todas as vendas realizadas para um determinado cliente e realize a cobrança em uma única nota e boleto."
            imageSource="/icon-distribuidor-5.svg"
            title="Emissão de faturas"
          />
          <Card
            description="Controle e romaneio de entregas, emissão de boletos, notas fiscais e pedidos de venda de toda a carga em uma única tela."
            imageSource="/icon-distribuidor-6.svg"
            title="Módulo de carregamento"
          />
          <Card
            description="Tenha relatórios de faturamento e inadimplência com fácil acesso, também via app mobile e garanta para sua empresa mais organização e praticidade."
            imageSource="/icon-distribuidor-7.svg"
            title="Relatórios gerenciais"
          />
          <Card
            description="Centralizamos todo o controle de cadastro de clientes e produtos, com a possibilidade de emissão da nota fiscal por diferentes CNPJ."
            imageSource="/icon-distribuidor-8.svg"
            title="Multinotas"
          />
          <ColoredCard
            description="Um sistema de gestão de distribuidoras que faz seu negócio decolar."
            firstColor="#E57B2D"
            secondColor="#1F408A"
            title="Saia na frente com nossas soluções"
          />
        </Container>
        <BackgroundContainer uri="/bg-sempre-distribuidor-box-1.jpg">
          <div className="col-span-5 col-end-13">
            <header className="flex items-center mb-6">
              <Image
                alt="App Sempre Distribuidor"
                height={52}
                quality={100}
                src="/icon-app-distribuidor.svg"
                width={54}
              />
              <span className="font-serif font-bold ml-4 text-white text-lg">
                APP Sempre Distribuidor
              </span>
            </header>
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              O seu negócio, onde você estiver, na palma da sua mão.
            </h1>
            <p className="text-white mb-6">
              Acesse o valor de vendas, saiba qual vendedor está vendendo mais,
              qual cliente está comprando mais e qual produto é o mais vendido.
            </p>
            <footer className="flex">
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
              <Image
                alt="Apple story"
                className="ml-4"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </footer>
          </div>
        </BackgroundContainer>
        <Container newClasses="py-24">
          <div className="col-span-5 flex flex-col justify-center">
            <Image
              alt="Sempre mensalidade"
              height={33}
              quality={100}
              src="/title-sempre-distribuidor-light.svg"
              width={238}
            />
            <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
              Sempre Distribuidor Lite
            </h1>
            <p className="mt-6 text-soft-gray">
              A simplicidade de um sistema para empresas de distribuição, para
              otimizar suas operações e emitir notas com facilidade.
            </p>
            <button
              className={`${styles.orange} font-sans font-bold mt-6 py-2 rounded text-sm w-2/5`}
            >
              Fale agora
            </button>
          </div>
          <div className="col-span-5 col-end-13">
            <PlayCard bgImage="/bg-play-sempre-distribuidor-light.svg" />
          </div>
        </Container>
        <BackgroundContainer uri="/bg-sempre-distribuidor-box-1.jpg">
          <div className="col-span-5 col-end-13">
            <header className="flex items-center mb-6">
              <Image
                alt="App Sempre Força de Vendas"
                height={52}
                quality={100}
                src="/icon-app-forca.svg"
                width={54}
              />
              <span className="font-serif font-bold ml-4 text-white text-lg">
                APP Sempre Força de Vendas
              </span>
            </header>
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              É mais praticidade em vendas externas.
            </h1>
            <p className="text-white mb-6">
              Visualize o cadastro de produto e de cliente. Mais praticidade
              para os registros e anotações de venda no próprio aplicativo, que
              ainda poderá fazer a transmissão direto para a retaguarda web e
              adiantar processos, como o de faturamento.
            </p>
            <footer className="flex">
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
              <Image
                alt="Apple story"
                className="ml-4"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </footer>
          </div>
        </BackgroundContainer>
        <Testimony />
        <Doubts
          doubts={doubts}
          image="/cellphone-gold.svg"
          theme="#C48E39"
          title="Tire suas dúvidas sobre Sempre Distribuidor"
        />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
