import Image from 'next/image';
import Link from 'next/link';
import { ContactForm, Tabs } from '../components/Elements';
import { Container } from '../components/Foundation';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
          <div className="col-span-4 lg:col-span-8 lg:col-start-3">
            <h1 className="font-serif font-semibold text-white text-4xl lg:text-6xl text-center">
              Olá! Somos a Sempre Tecnologia
            </h1>
          </div>
          <div className="col-span-4 lg:col-span-6 lg:col-start-4 my-8">
            <h2 className="font-serif text-white text-xl text-center">
              Uma empresa especializada em desenvolver sistemas de gestão
              empresarial utilizando tecnologia própria em plataforma web.
            </h2>
          </div>
          <div className="col-span-4 lg:col-start-5">
            <ul className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 items-center">
              <li className="border border-white rounded py-4 text-center w-3/4 lg:w-1/2">
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
              <li className="border border-white rounded py-4 text-center w-3/4 lg:w-1/2">
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
      <Container newClasses="pb-24 relative -mt-24 lg:-mt-48 z-20">
        <div className="col-span-4 lg:col-span-12 flex justify-center mb-12 lg:mb-24">
          <img alt="Sobre nós" src="/image-sobre-nos.png" />
        </div>
        <div className="col-span-4 lg:col-span-5 lg:col-start-2 flex flex-col justify-center">
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
        <div className="col-span-4 lg:col-span-5 grid grid-cols-12 gap-8">
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
      <Container>
        <div className="col-span-4 lg:col-span-6">
          <h1 className="font-serif font-bold text-5xl text-dark-blue">
            A solução perfeita para a sua empresa
          </h1>
        </div>
        <div className="col-span-4 lg:col-end-13 flex justify-end items-center">
          <p className="font-sans text-soft-gray">
            Soluções com tecnologia própria e atendimento diferenciado perto de
            você.
          </p>
        </div>
      </Container>
      <Container newClasses="pt-12 lg:pt-24">
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Sempre mensalidade"
            height={39}
            quality={100}
            src="/icon-proposito.svg"
            width={39}
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
            alt="Sempre mensalidade"
            height={39}
            quality={100}
            src="/icon-visao.svg"
            width={39}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Visão
          </h1>
          <p className="font-sans text-soft-gray">
            Ser referência em sistemas de gestão e certificado digital no Brasil
            de forma sustentável
          </p>
        </div>
        <div className="bg-white col-span-4 lg:col-span-3 drop-shadow p-8">
          <Image
            alt="Sempre mensalidade"
            height={39}
            quality={100}
            src="/icon-proposito-box.svg"
            width={39}
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
            alt="Sempre mensalidade"
            height={39}
            quality={100}
            src="/icon-valores.svg"
            width={39}
          />
          <h1 className="font-sans font-semibold my-6 text-4xl text-dark-blue">
            Valores
          </h1>
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">
                Superação e Simplicidade
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">
                Espírito de Equipe
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">
                Melhoria contínua
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">Profissionalismo</span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">
                Respeito e Reconhecimento
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <FontAwesomeIcon className="h-4 text-red-600" icon={faCheck} />
              <span className="font-sans text-soft-gray">Entusiasmo</span>
            </li>
          </ul>
        </div>
      </Container>
      <Container newClasses="pt-12 lg:pt-24">
        <div className="col-span-4 lg:col-span-6">
          <h2 className="font-serif font-semibold mt-2 text-gray-600 text-xl lg:text-2xl uppercase">
            Entenda como podemos te ajudar
          </h2>
          <h1 className="font-serif font-bold mt-6 lg:mt-0 text-4xl lg:text-5xl text-dark-blue">
            Tecnologia que facilita
          </h1>
        </div>
        <div className="col-span-4 lg:col-end-13 flex justify-end items-center">
          <p className="font-sans text-soft-gray">
            Temos o que sua empresa precisa para fazer a gestão financeira e
            comercial, com mais agilidade, controle e redução de custos.
          </p>
        </div>
      </Container>
      <Container newClasses="pt-24">
        <Tabs />
      </Container>
      <Container newClasses="py-16 lg:py-24">
        <div className="col-span-4 lg:col-span-5">
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
        <div className="col-span-4 lg:col-span-6 lg:col-end-13">
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
