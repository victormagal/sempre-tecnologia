'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { CardFeature, ContactForm } from '../components/Elements';
import { Container, HeroPage, ModalForm } from '../components/Foundation';

export default function Contador() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage
        arrow={false}
        cta={false}
        title="Programa de parceria para Contadores"
        description="Conheça nosso programa de parceria para Contadores e aproveite as vantagens exclusivas."
        uri="/bg-hero-contadores.png"
        heroImage="/contador-subheader.png"
      />
      <Container>
        <div className="col-span-6 col-start-4 my-16 text-center">
          <Overline appearance="o1" color={red[700]}>
            Parceria para contadores
          </Overline>
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[500]}
            extra
          >
            Simplifique sua rotina e ganhe tempo e produtividade
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Nosso programa de parceria para contadores oferece recursos que vão
            otimizar a rotina do seu escritório. Assim, você terá mais tempo
            para se dedicar aos seus clientes.
          </Text>
        </div>
        {/* <div
          className={`${styles.gradientBlue} col-span-4 lg:col-span-6 lg:col-end-13 flex flex-col items-center lg:items-start justify-center p-12 lg:p-16`}
        >
          <Image
            alt="Sempre mensalidade"
            height={18}
            quality={100}
            src="/icon-white.svg"
            width={45}
          />
          <h1 className="font-serif font-bold mt-6 text-white text-3xl text-center lg:text-left">
            Ficou interessado?
          </h1>
          <p className="font-sans mt-6 text-white text-center lg:text-left">
            Temos vários benefícios exclusivos para contadores parceiros. Venha
            ser um Contador Sempre Tecnologia.
          </p>
          <button
            className={`${styles.gradientYellow} font-sans font-bold mt-6 py-4 rounded text-sm text-white w-4/5`}
            onClick={() => setOpenModal(true)}
            type="button"
          >
            QUERO SER PARCEIRO
          </button>
        </div> */}
      </Container>

      <Container newClasses="border-b pb-16">
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Você recebe todas as informações fiscais do seu cliente por meio de nossas soluções."
          icon="faBuilding"
          iconColor={red[600]}
          iconSize="h-10"
          title="Integração contábil"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Conte com nosso apoio tanto para seu escritório quanto para seus clientes. Estamos #SemprePresente"
          icon="faComments"
          iconColor={red[600]}
          iconSize="h-10"
          title="Atendimento diferenciado"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Plataforma para administrar as indicações de certificados digitais."
          icon="faGem"
          iconColor={red[600]}
          iconSize="h-10"
          title="Portal Sempre Contador"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Emita notas fiscais eletrônicas para seus clientes e gere renda adicional para seu escritório."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Solução Multiempresas"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Gerencie a validade dos certificados digitais de seus clientes por meio do Portal Sempre Contador."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Certificados digitais em dia"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Conte com nossas soluções web e facilite a vida do seu cliente e também da sua contabilidade."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Soluções web"
        />
      </Container>
      <Container>
        <button
          className={`${styles.red} font-sans mt-6 py-4 text-white`}
          onClick={() => setOpenModal(true)}
          type="button"
        >
          QUERO SER UM PARCEIRO
        </button>
      </Container>

      <Container newClasses="py-12 lg:py-24 col-span-12">
        {/* <div className="col-span-12 bg-[#EEECE6]"> */}
        <div className="col-span-4 lg:col-span-5">
          <Image
            alt="Portal Sempre Contador"
            height={85}
            width={288}
            quality={100}
            src="/logo-portal-sempre-contador.png"
          />
          <p className="font-sans mb-10 mt-6 text-gray-600 text-lg text-center lg:text-left">
            Seja nosso parceiro e aproveite nossos benefícios. Deixe seus dados
            que entraremos em contato.
          </p>
        </div>
        <div className="col-span-4 lg:col-span-6">
          <Image
            alt="Portal Sempre Contador"
            height={155}
            width={470}
            quality={100}
            src="/img-ficou-interessado-top.png"
          />
        </div>
        <div className="col-span-4 lg:col-span-6">
          <Image
            alt="Portal Sempre Contador"
            height={674}
            width={466}
            quality={100}
            src="/img-ficou-interessado-esq.png"
          />
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-end-13">
          <Title
            appearance="h1"
            className="mb-4"
            color={neutralDark[600]}
            extra
          >
            Ficou interessado?
          </Title>
          <Text appearance="p3" className="mb-8" color={neutralDark[100]}>
            Temos vários benefícios exclusivos especialmente para a sua
            necessidade. Venha ser um parceiro!
          </Text>
          <ContactForm />
        </div>
        {/* </div> */}
      </Container>
    </main>
  );
}
