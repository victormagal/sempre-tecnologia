import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { ContactForm, MicroCard } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage
} from '../components/Foundation';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sobre() {
  return (
    <main>
      <section style={{ height: '700px' }} className="relative flex flex-col">
        <div className="z-0">
          <Image
            alt="Background Image"
            className="object-cover object-center"
            fill
            quality={100}
            src="/bg-sobre.png"
          />
        </div>
        <Container newClasses="relative z-10 pt-36">
          <div className="col-span-8 col-start-3">
            <h1 className="font-serif font-semibold text-white text-6xl text-center">
              Olá! Somos a Sempre Tecnologia
            </h1>
          </div>
          <div className="col-span-6 col-start-4 my-8">
            <h2 className="font-serif text-white text-xl text-center">
              Uma empresa especializada em desenvolver sistemas de gestão
              empresarial utilizando tecnologia própria em plataforma web.
            </h2>
          </div>
          <div className="col-span-4 col-start-5">
            <ul className="flex space-x-4">
              <li className="border border-white rounded py-4 text-center w-1/2">
                <Link href="">
                  <FontAwesomeIcon
                    className="h-4 mr-2 text-white"
                    icon={faClock}
                  />
                  <span className="font-sans font-bold text-sm text-white">
                    Agende uma visita
                  </span>
                </Link>
              </li>
              <li className="border border-white rounded py-4 text-center w-1/2">
                <Link href="">
                  <FontAwesomeIcon
                    className="h-4 mr-2 text-white"
                    icon={faUser}
                  />
                  <span className="font-sans font-bold text-sm text-white">
                    Trabalhe conosco
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <Container newClasses="pb-24 relative -mt-48 z-20">
        <div className="col-span-12 flex justify-center mb-24">
          <img alt="Sobre nós" src="/image-sobre-nos.png" />
        </div>
        <div className="col-span-5 col-start-2 flex flex-col justify-center">
          <h1 className="font-serif font-bold text-4xl text-dark-blue">
            Sobre nós
          </h1>
          <p className="font-sans mt-6 text-soft-gray">
            Aqui na Sempre Tecnologia temos uma equipe treinada para implantação
            e suporte em nossos sistemas para micro, pequenas e médias empresas.
          </p>
          <p className="font-sans mt-6 text-soft-gray">
            Credenciados pelo Governo Federal, emitimos certificado digital
            padrão ICP Brasil com atendimento diferenciado e suporte técnico
            especializado.
          </p>
          <p className="font-sans mt-6 text-soft-gray">
            Para estar perto de você nossa matriz fica no SIA, em Brasília,
            filiais no DF, GO, TO, sedes em Goiânia, Palmas e distribuidores no
            Brasil.
          </p>
        </div>
        <div className="col-span-5 grid grid-cols-12 gap-8">
          <div className="bg-white col-span-6 drop-shadow flex flex-col justify-center items-center p-6 text-center">
            <Image
              alt="Sempre mensalidade"
              height={32}
              quality={100}
              src="/icon-filiais.svg"
              width={32}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              +28
            </h1>
            <p className="font-sans text-soft-gray">filiais no Brasil</p>
          </div>
          <div className="bg-white col-span-6 drop-shadow flex flex-col justify-center items-center p-6 text-center">
            <Image
              alt="Sempre mensalidade"
              height={32}
              quality={100}
              src="/icon-mercado.svg"
              width={32}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              +10
            </h1>
            <p className="font-sans text-soft-gray">anos no mercado</p>
          </div>
          <div className="bg-white col-span-6 drop-shadow flex flex-col justify-center items-center p-6 text-center">
            <Image
              alt="Sempre mensalidade"
              height={32}
              quality={100}
              src="/icon-satisfacao.svg"
              width={32}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              99%
            </h1>
            <p className="font-sans text-soft-gray">
              de satisfação no atendimento
            </p>
          </div>
          <div className="bg-white col-span-6 drop-shadow flex flex-col justify-center items-center p-6 text-center">
            <Image
              alt="Sempre mensalidade"
              height={32}
              quality={100}
              src="/icon-pos-venda.svg"
              width={32}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-4xl">
              99%
            </h1>
            <p className="font-sans text-soft-gray">
              de satisfação no pós-venda
            </p>
          </div>
        </div>
      </Container>
      <BackgroundContainer uri="/bg-contador-1.svg">
        <div className="col-span-6 col-start-4 flex flex-col items-center">
          <Image
            alt="Portal Sempre Contador"
            height={99}
            quality={100}
            src="/icon-portal-contador-ballon.svg"
            width={93}
          />
          <h1 className="font-serif font-semibold text-white text-4xl my-8">
            Portal Sempre Contador
          </h1>
          <p className="font-sans text-white mb-8">
            O Portal Sempre Contador é uma plataforma exclusiva para contadores,
            feita para administrar indicações de soluções Sempre e gerenciar a
            validade dos certificados digitais de clientes.
          </p>
          <button
            className="bg-transparent border border-white font-bold px-20 py-5 text-white rounded"
            type="button"
          >
            Cadastre-se no portal
          </button>
        </div>
      </BackgroundContainer>
      <Container newClasses="py-24">
        <div className="col-span-5">
          <h2 className="font-sans font-semibold mb-2 text-gray-600 uppercase">
            Seja um sempre parceiro
          </h2>
          <h1 className="font-sans font-bold mb-10 text-dark-blue text-5xl">
            Venha fazer parte da nossa equipe
          </h1>
          <p className="font-sans mb-10 text-gray-600 text-lg">
            Seja nosso parceiro e aproveite nossos benefícios. Deixe seus dados
            que entraremos em contato.
          </p>
          <p className="font-sans font-bold mb-4 text-gray-600 text-lg">
            Acompanhe nas redes sociais
          </p>
          <ul className="flex space-x-4">
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
        <div className="col-span-6 col-end-13">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
