'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  creamAssistant,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from './base/Colors';
import SolidIcon from './base/SolidIcon';
import { Overline, Text, Title } from './base/Typography';
import { LastPosts, ModalVimeo, Tabs } from './components/Elements';
import {
  Container,
  ModalForm,
  Partners,
  Testimonies
} from './components/Foundation';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVimeo, setOpenModalVimeo] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/554410663?h=75a44195db&title=0&byline=0&portrait=0"
      />
      <Container newClasses="py-14">
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-10">
          <Title
            appearance="h1"
            className="text-center lg:text-left"
            color={neutralDark[500]}
            extra
          >
            Soluções com tecnologia própria e atendimento diferenciado para você
            e sua empresa
          </Title>
          <Text
            appearance="p2"
            className="text-center lg:text-left"
            color={neutralMid[500]}
          >
            Sistemas ERP para Gestão Empresarial
            <br />
            Autoridade de Registro: Emita ou Renove seu certificado digital com
            segurança, agilidade e atendimento personalizado
          </Text>
          <button
            className="w-full xl:w-1/3 py-4 px-8 rounded"
            onClick={() => setOpenModal(true)}
            style={{ background: red[1000] }}
            type="button"
          >
            <Text appearance="p4" color={neutralLight[100]}>
              Fale com um consultor
            </Text>
          </button>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center justify-end mt-8 lg:mt-0">
          <Image
            alt="Aproveite nossa Black November"
            height={503}
            src="/hero-home.png"
            width={486}
          />
        </div>
      </Container>
      <Container bgContainer={neutralDark[500]} newClasses="rounded-2xl">
        <div className="col-span-4 lg:col-span-10 lg:col-start-2 flex flex-col lg:flex-row lg:justify-between py-12 space-y-12 lg:space-y-0 lg:space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              97%
            </Title>
            <Title
              appearance="h6"
              color={neutralMid[100]}
              className="text-center"
              extra
            >
              Satisfação ao atendimento Pós-Venda
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              98%
            </Title>
            <Title
              appearance="h6"
              color={neutralMid[100]}
              className="text-center"
              extra
            >
              Satisfação ao atendimento Suporte Técnico a Sistemas
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              97%
            </Title>
            <Title
              appearance="h6"
              color={neutralMid[100]}
              className="text-center"
              extra
            >
              Satisfação ao atendimento Certificado Digital
            </Title>
          </div>
        </div>
      </Container>
      <Container newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col space-y-4">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Segmentos
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            Qual é a sua necessidade?
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            Temos um sistema de gestão perfeito para você. Confira as nossas
            soluções:
          </Text>
        </div>
      </Container>
      <Tabs />
      <Container bgColor={creamAssistant[100]} newClasses="mt-12 py-20">
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-6">
          <Overline appearance="o1" color={red[700]}>
            Quem somos
          </Overline>
          <Title appearance="h1" color={neutralDark[500]} extra>
            Você conhece a Sempre Tecnologia?
          </Title>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center">
          <Text appearance="p3" color={neutralMid[500]}>
            Somos uma empresa especializada em desenvolver sistemas com
            tecnologia própria em plataforma web para nossos clientes. Já
            estamos há mais de 12 anos no mercado. Possuímos uma estrutura ampla
            e atendimento diferenciado para atender e dar suporte para micro,
            pequenas e médias empresas.
          </Text>
        </div>
        <div className="col-span-4 lg:col-span-12 flex justify-center mt-8">
          <Image
            className="cursor-pointer"
            height={388}
            onClick={() => setOpenModalVimeo(true)}
            src="/bg-play-home-quem-somos.png"
            width={1151}
          />
        </div>
      </Container>
      <Testimonies />
      <Partners />
      <Container bgColor={creamAssistant[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6">
          <Overline appearance="o1" color={red[700]}>
            Blog
          </Overline>
          <Title appearance="h2" color={neutralDark[500]}>
            Quer dicas, conteúdos e tirar dúvidas? Acesse o nosso Blog
          </Title>
        </div>
        <div className="col-span-4 lg:col-span-6 flex items-center justify-center lg:justify-end">
          <button
            className="flex justify-center p-4 rounded-md w-full lg:w-auto"
            style={{ backgroundColor: red[1000] }}
          >
            <Link className="flex items-center space-x-3" href="/noticias">
              <Text appearance="p4" color={neutralLight[100]}>
                Veja todos os artigos
              </Text>
              <SolidIcon
                icon="faChevronRight"
                iconColor={neutralLight[100]}
                newClasses="h-3"
              />
            </Link>
          </button>
        </div>
        <LastPosts />
      </Container>
      <Container
        bgContainer={neutralDark[500]}
        newClasses="mt-16 py-16 rounded-2xl"
      >
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-12">
          <Title appearance="h2" color={neutralLight[100]} extra>
            Seja Sempre!
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[100]}>
            Venha conversar conosco. Temos a solução perfeita em sistemas web
            para alavancar a gestão do seu negócio.
          </Text>
          <button
            className="flex items-center p-4 rounded-md space-x-3"
            onClick={() => setOpenModal(true)}
            style={{ backgroundColor: red[1000] }}
          >
            <Text appearance="p4" color={neutralLight[100]}>
              Converse com um especialista
            </Text>
            <SolidIcon
              icon="faChevronRight"
              iconColor={neutralLight[100]}
              newClasses="h-3"
            />
          </button>
        </div>
      </Container>
    </main>
  );
}
