'use client';
import Image from 'next/image';
import Link from 'next/link';
// import styles from './page.module.css';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import RegularIcon from '../base/RegularIcon';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { CardFeature } from '../components/Elements';
import { Container } from '../components/Foundation';

export default function Certificadora() {
  return (
    <main>
      <Container newClasses="mb-16 mt-36">
        <div className="col-span-6 col-start-4">
          <Image
            alt="Certificado Digital - Emita o seu de onde estiver"
            height={33}
            src="/logos/certificadora.svg"
            width={172}
          />
          <Title appearance="h1" color={red[1000]} extra>
            Certificado Digital:
          </Title>
          <Title appearance="h1" color={neutralDark[500]} extra>
            adquira o ideal pra você
          </Title>
        </div>
      </Container>
      {/* <section className={styles.azul}>
        <Container>
          <div
            className="col-span-4 lg:col-span-12 flex justify-center relative"
            style={{ height: '539px' }}
          >
            <Image
              alt="Sempre mensalidade"
              fill
              sizes="100vw"
              src="/about.png"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="col-span-8 col-start-3 flex justify-between mb-16 mt-12">
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                +25
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                filiais no Brasil
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                +10
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                anos no mercado
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                99%
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                de satisfação no atendimento
              </Title>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Title appearance="h1" color="white">
                99%
              </Title>
              <Title appearance="h6" color="#B3BAC5">
                de satisfação no pós-venda
              </Title>
            </div>
          </div>
        </Container>
      </section> */}
      <Container>
        <div className="col-span-6 col-start-4 my-16 text-center">
          <Overline appearance="o1" color={red[700]}>
            Nossas Vantagens
          </Overline>
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[500]}
            extra
          >
            O que eu só encontro na Sempre Tecnologia?
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            Soluções com tecnologia própria e entendimento diferenciado perto de
            você.
          </Text>
        </div>
      </Container>
      <Container
        bgContainer={neutralDark[600]}
        newClasses="items-center py-16 rounded-xl"
      >
        <div className="col-span-4 col-start-2">
          <Title appearance="h1" color={neutralLight[200]} extra>
            Precisa de ajuda? Conte com a gente.
          </Title>
          <Text
            appearance="p1"
            color={neutralLight[600]}
            className="mb-10 mt-6"
          >
            Confira o passo a passo para instalação do seu Certificado Digital.
          </Text>
          <ul className="flex space-x-6">
            <Link href="/">
              <li
                className="flex p-4 rounded-md space-x-3"
                style={{ background: red[1000] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Manual de instruções
                </Text>
                <SolidIcon
                  icon="faDownload"
                  iconColor={neutralLight[100]}
                  newClasses="h-4"
                />
              </li>
            </Link>
            <Link href="/">
              <li
                className="border flex p-4 rounded-md space-x-3"
                style={{ borderColor: neutralLight[600] }}
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Fale conosco
                </Text>
                <RegularIcon
                  icon="faComments"
                  iconColor={neutralLight[100]}
                  newClasses="h-4"
                />
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-end-12 col-span-5 flex justify-end">
          <Image
            alt="Precisa de ajuda? Conte com a gente."
            height={360}
            src="/container-ajuda.png"
            width={436}
          />
        </div>
      </Container>
      <Container newClasses="border-b pb-16">
        <CardFeature
          bgColor={neutralLight[200]}
          description="Um ambiente pensado para tornar o atendimento ágil e confortável"
          icon="faFaceSmileWink"
          iconColor={red[600]}
          title="Ambiente moderno"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Temos mais de 25 filiais para garantir que tenha uma mais próxima a você"
          icon="faBuilding"
          iconColor={red[600]}
          title="Filiais de atendimento"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Nossa equipe trabalha para garantir um processo rápido e seguro do Certificado Digital"
          icon="faFile"
          iconColor={red[600]}
          title="Agilidade de emissão"
        />
        <CardFeature
          bgColor={neutralLight[200]}
          description="Equipe disponível e preparada para te auxiliar no que você precisar"
          icon="faUser"
          iconColor={red[600]}
          title="Suporte ao cliente"
        />
      </Container>
    </main>
  );
}
