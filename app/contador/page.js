'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import {
  creamAssistant,
  emissor,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '../base/Colors';
import SolidIcon from '../base/SolidIcon';
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
      <Container bgColor={neutralLight[200]}>
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
      <Container bgColor={neutralLight[200]} newClasses="border-b pb-16">
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
      <Container
        bgContainer={creamAssistant[200]}
        newClasses="flex items-center rounded-2xl"
      >
        <div className="col-span-6 col-start-2">
          <Image
            className="mb-6"
            alt="Portal Sempre Contador"
            height={85}
            width={288}
            src="/logo-portal-sempre-contador.png"
          />
          <Text className="mb-6" appearance="p1" color={neutralDark[100]}>
            Você já é um parceiro? Acesse o Portal Sempre Contador e cadastre-se
            par receber vantagens exclusivas.
          </Text>
          <Link href="/">
            <button
              className="flex p-4 rounded-md space-x-3"
              style={{ background: emissor[500] }}
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Acessar plataforma
              </Text>
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralLight[100]}
                newClasses="h-4 mt-0.5"
              />
            </button>
          </Link>
        </div>
        <div className="col-end-12 col-span-4">
          <Image
            alt="Portal Sempre Contador"
            height={373}
            width={470}
            quality={100}
            src="/avatar-portal-sempre-contador.png"
          />
        </div>
      </Container>
      <Container>
        <div className="col-span-5 col-start-2 mt-24">
          <Image
            alt="Portal Sempre Contador"
            height={674}
            width={466}
            src="/img-ficou-interessado-esq.png"
          />
        </div>
        <div className="col-span-5 col-end-12 mt-24">
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
      </Container>
    </main>
  );
}
