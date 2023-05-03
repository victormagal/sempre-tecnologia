'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';
import { ContactForm, MicroCard } from '../components/Elements';
import { Container, HeroPage, ModalForm } from '../components/Foundation';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Parceria() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage
        arrow={false}
        cta={false}
        description="Conheça nosso programa de parceria para venda de sistemas e certificado digital.​"
        title="Programa de parceria"
        uri="/bg-contador.jpg"
      />
      <Container newClasses="py-12 lg:py-24">
        <div className="col-span-4 lg:col-span-5 flex flex-col justify-center">
          <h1 className="font-serif font-bold text-4xl text-dark-blue text-center lg:text-left">
            Sistemas
          </h1>
          <p className="font-sans mt-6 text-soft-gray text-center lg:text-left">
            Seja um parceiro para vendas de sistemas em plataforma web para
            atender a vários segmentos, aplicativos mobile para gerar
            atratividade e fidelização de clientes além de um frente de caixa
            totalmente integrado a uma retaguarda web.
          </p>
          <h1 className="font-serif font-bold mt-12 text-4xl text-dark-blue text-center lg:text-left">
            Certificado digital
          </h1>
          <p className="font-sans mt-6 text-soft-gray text-center lg:text-left">
            Emita certificados digitais na sua região e atraia mais clientes
            para o seu negócio.
          </p>
        </div>
        <div
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
            Temos vários benefícios exclusivos para você. Venha ser um Parceiro
            Sempre Tecnologia.
          </p>
          <button
            className={`${styles.gradientYellow} font-sans font-bold mt-6 py-4 rounded text-sm text-white w-4/5`}
            onClick={() => setOpenModal(true)}
            type="button"
          >
            QUERO SER PARCEIRO
          </button>
        </div>
      </Container>
      <Container newClasses="pb-12 lg:pb-24">
        <MicroCard
          description="Você pode optar por fazer o atendimento de primeiro nível ao seu cliente e quando precisar de ajuda pode contar conosco.​"
          imageSource="/icon-parceria-1.svg"
          title="Atendimento Personalizado​"
        />
        <MicroCard
          description="Otimize nossa estrutura de marketing para anunciar os produtos e serviços, da nossa parceria, na sua região para potencializar suas vendas."
          imageSource="/icon-parceria-2.svg"
          title="Marketing Digital"
        />
        <MicroCard
          description="Plataforma para administrar as indicações de certificados digitais."
          imageSource="/icon-parceria-3.svg"
          title="Receita Recorrente em Sistemas"
        />
        <MicroCard
          description="Nossa parceria privilegia sua competência comercial, pois, sabemos que essa relação tem que ser boa para ambas as partes"
          imageSource="/icon-parceria-4.svg"
          title="Remuneração diferenciada"
        />
        <MicroCard
          description="Com as soluções em sistemas e certificado digital você tem a possibilidade de fazer parcerias com entidades de classe, gerando maior prestígio do seu negócio.​"
          imageSource="/icon-parceria-5.svg"
          title="Aumente sua rede de relacionamento"
        />
        <MicroCard
          description="Trabalhamos com transparência, respeito e profissionalismo dando segurança para que você concentre seus esforços nas vendas.​"
          imageSource="/icon-parceria-6.svg"
          title="Respeito e Profissionalismo​"
        />
      </Container>
      <Container newClasses="border-t py-12 lg:py-24">
        <div className="col-span-4 lg:col-span-5">
          <h2 className="font-sans font-semibold mb-2 text-gray-600 uppercase text-center lg:text-left">
            Seja um sempre parceiro
          </h2>
          <h1 className="font-sans font-bold mb-10 text-dark-blue text-5xl text-center lg:text-left">
            Venha fazer parte da nossa equipe
          </h1>
          <p className="font-sans mb-10 text-gray-600 text-lg text-center lg:text-left">
            Seja nosso parceiro e aproveite nossos benefícios. Deixe seus dados
            que entraremos em contato.
          </p>
          <p className="font-sans font-bold mb-4 text-gray-600 text-lg text-center lg:text-left">
            Acompanhe nas redes sociais
          </p>
          <ul className="flex space-x-4 justify-center lg:justify-start">
            <li>
              <Link
                href="https://www.facebook.com/sempretecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faFacebookSquare}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/sempre-tecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faLinkedin}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sempretecnologia/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="h-6 text-custom-orange"
                  icon={faInstagram}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-end-13">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
