'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Container } from '../components/Foundation';
import { Overline, Text, Title } from '../components/Typography';

export default function Sobre() {
  return (
    <main>
      <Container newClasses="pt-36">
        <div className="col-span-6">
          <Overline appearance="o1">Quem somos</Overline>
          <Title appearance="h2" extra={true}>
            Olá! Somos a Sempre Tecnologia
          </Title>
        </div>
        <div className="col-span-6">
          <Text appearance="p3">
            Uma empresa especializada em desenvolver sistema de gestão
            empresarial com tecnologia própria e atendimento diferenciado perto
            de você. Credenciados pelo Governo Federal, emitimos certificado
            digital padrão ICP Brasil com atendimento de excelência e suporte
            técnico especializado.
          </Text>
        </div>
      </Container>
      <section className={styles.azul}>
        <Container>
          <div
            className="col-span-4 lg:col-span-12 flex justify-center mb-12 lg:mb-24 relative"
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
          <div className="col-span-4 lg:col-span-10 lg:col-start-2 flex justify-between">
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <h1 className="font-serif font-semibold text-white text-4xl">
                +28
              </h1>
              <p className="font-sans text-white">filiais no Brasil</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <h1 className="font-serif font-semibold text-white text-4xl">
                +10
              </h1>
              <p className="font-sans text-white">anos no mercado</p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <h1 className="font-serif font-semibold text-white text-4xl">
                99%
              </h1>
              <p className="font-sans text-white">
                de satisfação no atendimento
              </p>
            </div>
            <div className="flex flex-col justify-center items-center p-6 text-center">
              <h1 className="font-serif font-semibold text-white text-4xl">
                99%
              </h1>
              <p className="font-sans text-white">de satisfação no pós-venda</p>
            </div>
          </div>
        </Container>
      </section>
      <Container newClasses="pt-12 lg:pt-24">
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Propósito"
            height={48}
            quality={100}
            src="/icon-proposito.svg"
            width={48}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Propósito
          </h1>
          <p className="font-sans text-soft-gray">
            Sempre juntos para apoiar as empresas e gerar prosperidade.
          </p>
        </div>
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Missão"
            height={48}
            quality={100}
            src="/icon-missao.svg"
            width={48}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Missão
          </h1>
          <p className="font-sans text-soft-gray">
            Facilitar a vida dos empresários e contadores com soluções em
            tecnologia e atendimento diferenciado.
          </p>
        </div>
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Valores"
            height={48}
            quality={100}
            src="/icon-valores.svg"
            width={48}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Valores
          </h1>
          <p className="font-sans text-soft-gray">
            Superação, simplicidade, espírito de equipe, melhoria contínua,
            profissionalismo, respeito e entusiasmo.
          </p>
        </div>
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Visão"
            height={48}
            quality={100}
            src="/icon-visao.svg"
            width={48}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Visão
          </h1>
          <p className="font-sans text-soft-gray">
            Ser referência em sistemas de gestão e certificado digital no Brasil
            de forma sustentável
          </p>
        </div>
      </Container>
    </main>
  );
}
