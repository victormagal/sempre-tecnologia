'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import {
  Card,
  ColoredCard,
  Doubts,
  PlayCard,
  TabsDistribuidor,
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

export default function SempreMDistribuidor() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage
        arrow={false}
        cta={true}
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
            onClick={() => setOpenModal(true)}
            type="button"
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
      <Container newClasses="pb-24">
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
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Fale agora
          </button>
        </div>
        <div className="col-span-5 col-end-13">
          <PlayCard bgImage="/bg-play-sempre-distribuidor-light.svg" />
        </div>
      </Container>
      <BackgroundContainer uri="/bg-sempre-distribuidor-box-1.jpg">
        <TabsDistribuidor />
      </BackgroundContainer>
      <Testimony />
      <Doubts
        doubts={doubts}
        image="/cellphone-gold.svg"
        theme="#C48E39"
        title="Tire suas dúvidas sobre Sempre Distribuidor"
      />
    </main>
  );
}
