'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ContactForm } from '../components/Elements';
import { Container, HeroPage, ModalForm } from '../components/Foundation';
import {
  faEnvelope,
  faPhone,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contato() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <HeroPage arrow={false} cta={false} mini={true} uri="/bg-blog.svg" />
      <Container newClasses="py-24">
        <div className="col-span-4 lg:col-span-6 flex flex-col">
          <h2 className="font-serif font-semibold mb-2 text-gray-600 uppercase text-center lg:text-left">
            Fale conosco
          </h2>
          <h1 className="font-serif font-bold mb-6 text-dark-blue text-4xl text-center lg:text-left">
            Sempre disponível para você
          </h1>
          <p className="font-sans mb-10 text-gray-600 text-lg text-center lg:text-left">
            Envie para nós suas críticas, dúvidas ou sugestões.
          </p>
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <li className="bg-overlay-gray rounded p-6 lg:w-5/12">
              <Link
                className="flex flex-col items-center lg:items-start"
                href=""
              >
                <FontAwesomeIcon className="h-5 text-red-600" icon={faPhone} />
                <h1 className="font-serif font-semibold mt-2 text-gray-600 uppercase">
                  Central de atendimento
                </h1>
                <h2 className="font-serif font-semibold text-gray-900">
                  0800 941 6260
                </h2>
              </Link>
            </li>
            <li className="bg-overlay-gray rounded p-6 lg:w-7/12">
              <Link
                className="flex flex-col items-center lg:items-start"
                href=""
              >
                <FontAwesomeIcon
                  className="h-5 text-red-600"
                  icon={faEnvelope}
                />
                <h1 className="font-serif font-semibold mt-2 text-gray-600 uppercase">
                  E-mail
                </h1>
                <h2 className="break-all font-serif font-semibold text-gray-900 uppercase">
                  contato@sempretecnologia.com.br
                </h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-4 lg:col-span-6">
          <ContactForm />
        </div>
      </Container>
      <section className="bg-overlay-gray py-24">
        <Container>
          <div className="col-span-4 lg:col-span-12 flex justify-center mb-8">
            <h1 className="font-serif font-semibold text-dark-blue text-4xl text-center lg:text-left">
              Um pouco mais sobre a Sempre
            </h1>
          </div>
          <Link
            href="/sobre"
            className="col-span-4 flex flex-col items-center space-y-4"
          >
            <Image
              alt="Background Image"
              className="cursor-pointer object-cover object-center"
              height={20}
              quality={100}
              src="/icon-quem-somos.svg"
              width={50}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-2xl">
              Quem Somos
            </h1>
            <p className="font-sans text-soft-gray text-center">
              Conheça a história da Sempre e venhar trabalhar conosco
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Saiba mais
              <span>
                <FontAwesomeIcon
                  className="h-3 ml-2 text-red-600"
                  icon={faArrowRight}
                />
              </span>
            </p>
          </Link>
          <div className="col-span-4 cursor-pointer flex flex-col items-center my-6 lg:my-0 space-y-4">
            <Link
              href="https://api.whatsapp.com/send?phone=556130839390"
              target="_blank"
            ></Link>
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-whatsapp-red.svg"
              width={20}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-2xl">
              Chat WhatsApp
            </h1>
            <p className="font-sans text-soft-gray text-center">
              Fale com nossos atendentes através do WhatsApp.
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Entre em contato
              <span>
                <FontAwesomeIcon
                  className="h-3 ml-2 text-red-600"
                  icon={faArrowRight}
                />
              </span>
            </p>
          </div>
          <div
            className="col-span-4 cursor-pointer flex flex-col items-center space-y-4"
            onClick={() => setOpenModal(true)}
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-agendar-horario.svg"
              width={20}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-2xl">
              Agende um horário
            </h1>
            <p className="font-sans text-soft-gray text-center">
              Agende uma ligação com nossos atendentes
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Agendar ligação
              <span>
                <FontAwesomeIcon
                  className="h-3 ml-2 text-red-600"
                  icon={faArrowRight}
                />
              </span>
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
