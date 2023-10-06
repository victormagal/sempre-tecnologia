/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { neutralDark, neutralMid, neutralLight, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import {
  Container,
  HeroPage,
  ModalForm,
  Testimonies
} from '../components/Foundation';
import { getSegment } from '../graphql/queries';
import { CardFeature, Doubts, ModalVimeo } from '@/app/components/Elements';
import { useQuery } from '@apollo/client';

export default function Segment() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVimeo, setOpenModalVimeo] = useState(false);
  const [data, setData] = useState({});
  const path = usePathname().slice(1);
  useQuery(getSegment, {
    variables: { slug: path },
    onCompleted: (data) => {
      setData(data?.segmentos?.data[0]);
    }
  });

  console.log(data?.attributes?.faq);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <ModalVimeo
        open={openModalVimeo}
        onClose={() => setOpenModalVimeo(false)}
        link="https://player.vimeo.com/video/377878667?h=0e8c653561&title=0&byline=0&portrait=0"
      />
      <HeroPage bgColor={neutralDark[500]} gradient={false} className="py-10">
        <div className="col-span-4 lg:col-span-5 flex flex-col space-y-6">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={33}
            src="/logos/parceria.svg"
            width={172}
          />
          <Title appearance="h1" color={neutralLight[100]} extra>
            Parceria em Certificado Digital
          </Title>
          <Text appearance="p3" color={neutralLight[100]}>
            Aproveite todas as vantagens e benefícios com o nosso programa de
            parceria na emissão de Certificado Digital.
          </Text>
          <Link href="/">
            <button
              className="w-full lg:w-auto py-4 lg:px-8 rounded"
              style={{ background: red[1000] }}
              type="button"
            >
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </button>
          </Link>
        </div>
        <div className="col-span-4 lg:col-end-13 lg:col-span-6 flex justify-center lg:justify-end md:py-16">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={352}
            src="/hero-parceiro-certificador.png"
            width={560}
          />
        </div>
      </HeroPage>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-6">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Sempre certificado
          </Overline>
          <Title
            appearance="h2"
            className="text-center"
            color={neutralDark[500]}
            extra
          >
            Seja um parceiro da nossa rede de Certificado Digital
          </Title>
          <Text appearance="p3" className="text-center" color={neutralMid[500]}>
            Temos uma proposta de parceria com as melhores vantagens do mercado
            para você e seus clientes.
          </Text>
        </div>
      </Container>
      <Container bgColor={neutralLight[200]} newClasses="pb-16">
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Precisa de ajuda? Atendimento de excelência ao seu cliente e para você quando precisar de ajuda."
          icon="faBuilding"
          iconColor={red[600]}
          iconSize="h-10"
          title="Atendimento Personalizado​"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Disponibilizamos todo o material de comunicação para os nossos parceiros serem referência na região."
          icon="faComments"
          iconColor={red[600]}
          iconSize="h-10"
          title="Marketing"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Plataforma intuitiva para administrar certificados digitais."
          icon="faGem"
          iconColor={red[600]}
          iconSize="h-10"
          title="Administre os certificados"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Nossa parceria privilegia sua competência comercial, pois sabemos que essa relação tem que ser boa para ambas as partes."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Parceria diferenciada"
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Eleve seu negócio com certificados digitais, atraindo parcerias de prestígio com entidades de classe."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Expanda sua rede de contatos."
        />
        <CardFeature
          third={true}
          bgColor={neutralLight[100]}
          description="Segurança, respeito e profissionalismo, liberando você para focar no seu negócio com tranquilidade."
          icon="faLightbulb"
          iconColor={red[600]}
          iconSize="h-10"
          title="Respeito e Profissionalismo​"
        />
        <div className="col-span-4 lg:col-span-12 flex justify-center">
          <button
            className="px-8 py-4 rounded-md w-full lg:w-auto"
            onClick={() => setOpenModal(true)}
            style={{ background: red[1000] }}
            type="button"
          >
            <Link href="/">
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </Link>
          </button>
        </div>
      </Container>
      <Container bgColor={neutralLight[100]} newClasses="pb-16">
        <div className="col-span-4 lg:col-span-6 flex justify-center">
          <div
            className="cursor-pointer"
            onClick={() => setOpenModalVimeo(true)}
          >
            <Image
              src="/bg-play-certificado-digital.png"
              height={324}
              width={564}
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6 flex flex-col justify-center space-y-6">
          <Overline appearance="o1" color={red[700]}>
            Quem somos
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Você conhece a Sempre Tecnologia?
          </Title>
          <Text appearance="p3" color={neutralMid[500]}>
            Com mais de 12 anos de sólida presença no mercado, temos uma
            estrutura ampla e um atendimento diferenciado. Atuamos no
            desenvolvimento de tecnologia própria para diversos segmentos e
            contamos com o credenciamento na emissão de Certificado Digital em
            todo o Brasil. Seja o nosso parceiro.
          </Text>
          <button
            className="py-4 rounded w-full lg:w-1/3"
            style={{ background: red[1000] }}
            type="button"
          >
            <Link href="/">
              <Text appearance="p4" color={neutralLight[100]}>
                Quero ser um parceiro
              </Text>
            </Link>
          </button>
        </div>
      </Container>
      <Testimonies />
      <Container newClasses="py-16">
        <ul className="col-span-4 lg:col-span-12 flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0">
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
      <Doubts doubts={data?.attributes?.faq} />
    </main>
  );
}
