import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '../components/Elements';
import { Container, HeroPage } from '../components/Foundation';
import {
  faEnvelope,
  faPhone,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contato() {
  return (
    <main>
      <HeroPage arrow={false} cta={false} mini={true} uri="/bg-blog.svg" />
      <Container newClasses="py-24">
        <div className="col-span-5">
          <h2 className="font-sans font-semibold mb-2 text-gray-600 uppercase">
            Fale conosco
          </h2>
          <h1 className="font-sans font-bold mb-10 text-dark-blue text-5xl">
            Sempre disponível para você
          </h1>
          <p className="font-sans mb-10 text-gray-600 text-lg">
            Envie para nós suas críticas, dúvidas ou sugestões.
          </p>
          <ul className="flex space-x-4">
            <li className="bg-gray-200 rounded p-6">
              <Link href="">
                <FontAwesomeIcon className="h-5 text-red-600" icon={faPhone} />
                <h1 className="font-serif font-semibold mt-2 text-gray-600 uppercase">
                  Central de atendimento
                </h1>
                <h2 className="font-serif font-semibold text-gray-900 uppercase">
                  0800 941 6260
                </h2>
              </Link>
            </li>
            <li className="bg-gray-200 rounded p-6">
              <Link href="">
                <FontAwesomeIcon
                  className="h-5 text-red-600"
                  icon={faEnvelope}
                />
                <h1 className="font-serif font-semibold mt-2 text-gray-600 uppercase">
                  E-mail
                </h1>
                <h2 className="font-serif font-semibold text-gray-900 uppercase">
                  contato@sempretecnologia.com.br
                </h2>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 col-end-13">
          <ContactForm />
        </div>
      </Container>
      <section className="bg-gray-200 py-24">
        <Container>
          <div className="col-span-12 flex justify-center mb-8">
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              Um pouco mais sobre a Sempre
            </h1>
          </div>
          <div className="col-span-2 col-start-4 flex flex-col items-center space-y-4">
            <Image
              alt="Background Image"
              className="object-cover object-center"
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
          </div>
          <div className="col-span-2 flex flex-col items-center space-y-4">
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
          <div className="col-span-2 flex flex-col items-center space-y-4">
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
