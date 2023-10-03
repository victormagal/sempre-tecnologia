'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import {
  Card,
  ColoredCard,
  Doubts,
  ModalVimeo,
  PlayCard,
  Testimony,
  TransparentCard
} from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage,
  ModalForm
} from '../components/Foundation';
import { doubts } from './data';

export default function SempreMensalidade() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVimeo, setOpenModalVimeo] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/377878667?h=0e8c653561&title=0&byline=0&portrait=0"
      />
      <HeroPage
        arrow={false}
        cta={true}
        description="Empresário e gestor que tem recebíveis recorrentes, nós temos funcionalidades que agilizarão seu dia a dia."
        iconSource="/icon-sempre-mensalidade.svg"
        title="Gestão de mensalidades"
        uri="/bg-sempre-mensalidade.png"
      />
      <Container newClasses="py-12 lg:py-24">
        <div
          className="col-span-4 lg:col-span-5 md:my-12 lg:mb-0 cursor-pointer"
          onClick={() => setOpenModalVimeo(true)}
        >
          <PlayCard bgImage="/bg-play-sempre-mensalidade.svg" />
        </div>
        <div className="col-span-4 lg:col-span-7 flex flex-col items-center lg:items-start justify-center space-y-6">
          <Image
            alt="Sempre mensalidade"
            height={24}
            quality={100}
            src="/title-sempre-mensalidade.svg"
            width={205}
          />
          <h1 className="font-serif font-bold text-dark-blue text-4xl text-center lg:text-left">
            Gestão de faturamento e financeiro
          </h1>
          <p className="text-soft-gray  text-center lg:text-left">
            Emissão de boletos em lote, envio automático por e-mail e cobrança
            automatizada, otimizam o fluxo de trabalho de empresas com
            recebíveis recorrentes.
          </p>
          <button
            className={`${styles.orange} font-sans font-bold py-2 rounded text-sm w-1/2`}
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Fale agora
          </button>
        </div>
      </Container>
      <Container newClasses="pb-12 lg:pb-24">
        <TransparentCard
          description="Gerenciamento assistido por soluções preparadas para facilitar o dia a dia do seu empreendimento."
          imageSource="/icon-otimize-1.svg"
          title="Funcionalidades que agregam"
        />
        <Card
          description="Tenha relatórios de faturamento e inadimplência com fácil acesso, também via app mobile e garanta para sua empresa mais organização e praticidade."
          imageSource="/icon-otimize-2.svg"
          title="Relatórios Gerenciais"
        />
        <Card
          description="Alertas de cobrança enviados automaticamente, controle de entrega e leitura de e-mail e régua de cobrança personalizada."
          imageSource="/icon-otimize-3.svg"
          title="Alertas automáticos"
        />
        <Card
          description="Atende às mais complexas regras tributárias de forma simplificada e automatizada para o usuário."
          imageSource="/icon-otimize-4.svg"
          title="Simplificado e automático"
        />
        <Card
          description="Tenha tabelas de organização que separam e ordenam as mensalidades por cliente."
          imageSource="/icon-otimize-5.svg"
          title="Organização por cliente"
        />
        <Card
          description="Exportação de arquivos para integração com a contabilidade na área fiscal e contábil."
          imageSource="/icon-otimize-6.svg"
          title="Integrado com a contabilidade"
        />
        <Card
          description="Treinamentos e implantação assistidos por profissionais qualificados para que haja o melhor uso das funcionalidades disponíveis."
          imageSource="/icon-otimize-7.svg"
          title="Suporte na implantação"
        />
        <Card
          description="Analista de conta responsável pelo seu projeto, que acompanha e sugere os recursos de acordo com a necessidade da empresa."
          imageSource="/icon-otimize-8.svg"
          title="Analista responsável"
        />
        <ColoredCard
          description="Agilizamos tarefas de empreendimentos com recebíveis recorrentes."
          firstColor="#CF2932"
          secondColor="#77335F"
          title="Saia na frente com nossas soluções"
        >
          <button
            className="bg-white font-bold mt-6 py-3 text-sm text-dark-blue rounded w-2/3"
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Contrate Agora
          </button>
        </ColoredCard>
      </Container>
      <BackgroundContainer uri="/bg-sempre-mensalidade-box1.jpg">
        <div className="col-span-4 lg:col-span-5 lg:col-end-13 flex flex-col items-center lg:items-start space-y-6">
          <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
            Soluções específicas para agilizar o seu dia a dia
          </h1>
          <p className="text-white text-center lg:text-left">
            Empresas com recebimentos recorrentes merecem soluções que tornem o
            processo de emissão e envio de boletos um processo mais prático.
          </p>
          <p className="text-white text-center lg:text-left">
            Ao automatizar processos recorrentes, seu empreendimento ganha tempo
            para pensar em estratégias de mercado que fazem toda a diferença.
          </p>
          <button
            className={`${styles.gradientYellow} font-bold px-20 py-3 text-sm text-white rounded`}
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Fale agora
          </button>
        </div>
      </BackgroundContainer>
      <Testimony />
      <BackgroundContainer uri="/bg-sempre-mensalidade-box2.jpg">
        <div className="col-span-4 lg:col-span-5 lg:col-end-13 flex flex-col space-y-6">
          <header className="flex items-center justify-center lg:justify-start space-x-4">
            <Image
              alt="App sempre mensalidade"
              height={52}
              quality={100}
              src="/icon-app-sempre.svg"
              width={54}
            />
            <span className="font-serif font-bold text-white text-lg text-center lg:text-left">
              APP Sempre Mensalidade
            </span>
          </header>
          <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
            O seu negócio, de onde você estiver, na palma da sua mão.
          </h1>
          <p className="text-white text-center lg:text-left">
            Acesse o valor de vendas, saiba qual vendedor está vendendo mais,
            qual cliente está comprando mais e qual serviço é o mais realizado.
          </p>
          <footer className="flex space-x-4 justify-center lg:justify-start">
            <Link
              href="https://play.google.com/store/apps/details?id=com.sempremensalidade"
              target="_blank"
            >
              <Image
                alt="Google play"
                height={59}
                quality={100}
                src="/google-play.svg"
                width={203}
              />
            </Link>
            <Link
              href="https://apps.apple.com/br/app/sempre-mensalidae/id1504666709"
              target="_blank"
            >
              <Image
                alt="Apple story"
                height={59}
                quality={100}
                src="/apple-store.svg"
                width={203}
              />
            </Link>
          </footer>
        </div>
      </BackgroundContainer>
      <Doubts
        doubts={doubts}
        image="/cellphone.svg"
        theme="#DC272B"
        title="Tire suas dúvidas sobre a emissão Sempre Mensalidade"
      />
    </main>
  );
}
