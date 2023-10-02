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
import { Container, Testimonies } from './components/Foundation';

export default function Home() {
  const [openModalVimeo, setOpenModalVimeo] = useState(false);

  return (
    <main className="pt-24">
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/377878667?h=0e8c653561&title=0&byline=0&portrait=0"
      />
      <Container newClasses="py-14">
        <div className="col-span-6 flex flex-col justify-center space-y-10">
          <Title appearance="h1" color={neutralDark[500]} extra>
            Seja bem-vindo a Sempre Tecnologia
          </Title>
          <Text appearance="p3" color={neutralMid[500]}>
            Atuamos no desenvolvimento de Sistemas Web de Gestão com tecnologia
            própria para diversos segmentos e contamos com o credenciamento na
            emissão de Certificado Digital em todo o Brasil.{' '}
            <strong>Conheça os segmentos em que atuamos.</strong>
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Saiba mais
              </Text>
            </button>
          </Link>
        </div>
        <div className="col-span-6 flex items-center justify-end">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={352}
            src="/hero-home.png"
            width={560}
          />
        </div>
      </Container>
      <Container bgContainer={neutralDark[500]} newClasses="rounded-2xl">
        <div className="col-span-10 col-start-2 flex justify-between py-8">
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              97%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Pós-Venda%
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              98%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Suporte Técnico a Sistemas
            </Title>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Title appearance="h1" color={neutralLight[100]} extra>
              85%
            </Title>
            <Title appearance="h6" color={neutralMid[100]} extra>
              Atendimento Certificado Digital
            </Title>
          </div>
        </div>
      </Container>
      <Container newClasses="py-16">
        <div className="col-span-6 col-start-4 flex flex-col space-y-4">
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

      <Container bgColor={creamAssistant[100]} newClasses="py-20">
        <div className="col-span-6 flex flex-col justify-center space-y-6">
          <Overline appearance="o1" color={red[700]}>
            Quem somos
          </Overline>
          <Title appearance="h1" color={neutralDark[500]} extra>
            Você conhece a Sempre Tecnologia?
          </Title>
        </div>
        <div className="col-span-6 flex items-center">
          <Text appearance="p3" color={neutralMid[500]}>
            Somos uma empresa especializada em desenvolver sistemas com
            tecnologia própria em plataforma web para nossos clientes. Já
            estamos há mais de 12 anos no mercado. Possuímos uma estrutura ampla
            e atendimento diferenciado para atender e dar suporte para micro,
            pequenas e médias empresas.
          </Text>
        </div>
        <div className="col-span-12 flex justify-center mt-8">
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
      <Container newClasses="py-8">
        <ul className="col-span-12 flex justify-between mb-14">
          <li>
            <Image
              alt="Litoral"
              height={35}
              src="/parceiros/litoral.png"
              width={88}
            />
          </li>
          <li>
            <Image
              alt="SmartFit"
              height={35}
              src="/parceiros/smart-fit.png"
              width={98}
            />
          </li>
          <li>
            <Image
              alt="Coco Bambu"
              height={28}
              src="/parceiros/coco-bambu.png"
              width={134}
            />
          </li>
          <li>
            <Image
              alt="Sebrae"
              height={30}
              src="/parceiros/sebrae.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Magic Color"
              height={35}
              src="/parceiros/magic-color.png"
              width={56}
            />
          </li>
          <li>
            <Image
              alt="Valor Ambiental"
              height={38}
              src="/parceiros/valor-ambiental.png"
              width={37}
            />
          </li>
        </ul>
      </Container>
      <Container>
        <div className="col-span-4 lg:col-span-9 mb-6">
          <h1 className="font-serif font-semibold text-4xl text-dark-blue text-center lg:text-left">
            Veja os últimos conteúdos do nosso Blog
          </h1>
        </div>
        <div className="col-span-4 lg:col-span-3 flex justify-center lg:justify-end mb-6">
          <Link
            className="bg-custom-red font-sans font-bold py-4 rounded text-center text-xs text-white uppercase w-2/3"
            href="/noticias"
          >
            Ver mais
          </Link>
        </div>
        <LastPosts />
      </Container>
      <Container
        bgContainer={neutralDark[500]}
        newClasses="mt-16 py-16 rounded-2xl"
      >
        <div className="col-span-6 col-start-4 flex flex-col items-center space-y-12">
          <Title appearance="h2" color={neutralLight[100]} extra>
            Seja Sempre!
          </Title>
          <Text appearance="p1" className="text-center" color={neutralMid[100]}>
            Venha conversar conosco. Temos a solução perfeita em sistemas web
            para alavancar a gestão do seu negócio.
          </Text>
          <Link href="/">
            <button
              className="flex items-center p-4 rounded-md space-x-3"
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
          </Link>
        </div>
      </Container>
    </main>
  );
}
