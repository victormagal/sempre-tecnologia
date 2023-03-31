import Image from 'next/image';
import {
  BackgroundContainer,
  Container,
  Footer,
  Header,
  HeroPage
} from '../components/Foundation';

export default function SempreMensalidade() {
  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Empresário e gestor que tem recebíveis recorrentes, nós temos funcionalidades que agilizarão seu dia a dia."
          iconSource="/icon-sempre-mensalidade.svg"
          title="Gestão de mensalidades"
          uri="/bg-sempre-mensalidade.jpg"
        />
        <Container newClasses="py-24">
          <div className="col-span-5">
            <Image
              alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
              height={382}
              quality={100}
              src="/bg-play-sempre-mensalidade.svg"
              width={570}
            />
          </div>
          <div className="col-span-4">
            <Image
              alt="Sempre mensalidade"
              height={24}
              quality={100}
              src="/title-sempre-mensalidade.svg"
              width={205}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              Gestão de faturamento e financeiro
            </h1>
            <p className="text-soft-gray">
              Emissão de boletos em lote, envio automático por e-mail e cobrança
              automatizada, otimizam o fluxo de trabalho de empresas com
              recebíveis recorrentes.
            </p>
            <button type="button">Fale agora</button>
          </div>
        </Container>
        <BackgroundContainer uri="/bg-sempre-mensalidade-box1.jpg">
          <div className="col-span-5 col-end-13">
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              Soluções específicas para agilizar o seu dia a dia
            </h1>
            <p className="text-white mb-6">
              Empresas com recebimentos recorrentes merecem soluções que tornem
              o processo de emissão e envio de boletos um processo mais prático.
            </p>
            <p className="text-white mb-6">
              Ao automatizar processos recorrentes, seu empreendimento ganha
              tempo para pensar em estratégias de mercado que fazem toda a
              diferença.
            </p>
            <button type="button">Fale agora</button>
          </div>
        </BackgroundContainer>
        <BackgroundContainer uri="/bg-sempre-mensalidade-box2.jpg">
          <div className="col-span-5 col-end-13">
            <header className="flex items-center mb-6">
              <Image
                alt="App sempre mensalidade"
                height={52}
                quality={100}
                src="/icon-app-sempre.svg"
                width={54}
              />
              <span className="font-serif font-bold ml-4 text-white text-lg">
                APP Sempre Mensalidade
              </span>
            </header>
            <h1 className="font-serif font-semibold text-white text-4xl mb-6">
              O seu negócio, de onde você estiver, na palma da sua mão.
            </h1>
            <p className="text-white mb-6">
              Acesse o valor de vendas, saiba qual vendedor está vendendo mais,
              qual cliente está comprando mais e qual serviço é o mais
              realizado.
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
      </main>
      <Footer />
    </>
  );
}
