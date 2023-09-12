'use client';
import Image from 'next/image';
import Link from 'next/link';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import { Overline, Text, Title } from '../base/Typography';
import { ContactForm } from '../components/Elements';
import { Container } from '../components/Foundation';

export default function Contato() {
  return (
    <main>
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-12 lg:col-span-6 lg:col-start-4 flex flex-col md:space-y-6 text-center px-8 mt-32 mb-12">
          <Overline appearance="o1" color={red[700]}>
            FALE CONOSCO
          </Overline>
          <Title appearance="h2" color={neutralDark[500]} extra>
            Nós adoraríamos ouvir de você
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            A nossa equipe está sempre à disposição para conversar com você!
          </Text>
        </div>
      </Container>
      <Container>
        <div className="flex flex-row space-x-12 col-span-12 justify-center border-b-2 pb-24">
          <Link
            href="/sobre"
            className="col-span-3 flex flex-col items-center space-y-4"
          >
            <Image
              alt="Background Image"
              className="cursor-pointer object-cover object-center"
              height={20}
              quality={100}
              src="/icon-email.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Email
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              Estamos aqui para atender você <br /> e tirar suas dúvidas.
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              contato@sempretecnologia.com.br
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-atendimento.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Central de atendimetno
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              0800 941 6260
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-whatsapp.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Whatsapp
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Mandar mensagem
            </p>
          </Link>
          <Link
            className="col-span-3 flex flex-col items-center my-6 lg:my-0 space-y-4"
            href="https://api.whatsapp.com/send?phone=556130839390"
            target="_blank"
          >
            <Image
              alt="Background Image"
              className="object-cover object-center"
              height={20}
              quality={100}
              src="/icon-contato.svg"
              width={40}
            />
            <h1 className="font-serif font-semibold text-dark-blue text-xl">
              Ligamos para você
            </h1>
            <p className="font-sans text-soft-gray text-center text-sm">
              De segunda a sexta (8h às 18h)
            </p>
            <p className="font-sans font-bold text-red-600 text-sm">
              Agendar ligacão
            </p>
          </Link>
        </div>
      </Container>
      <Container>
        <div className="col-span-12 lg:col-span-5 lg:col-start-7 mt-24 lg:order-last order-first">
          <Image
            className=""
            alt="Portal Sempre Contador"
            height={674}
            width={466}
            src="/img-contato.png"
          />
        </div>
        <div className="lg:col-start-2 lg:col-span-5 col-span-12 mt-24">
          <Title
            appearance="h2"
            className="mb-4"
            color={neutralDark[600]}
            extra
          >
            Ficou interessado?
          </Title>
          <Text appearance="p4" className="mb-8" color={neutralDark[100]}>
            Temos vários benefícios exclusivos especialmente para a sua
            necessidade. Venha ser um parceiro!
          </Text>
          <ContactForm />
        </div>
      </Container>
      {/* <Container newClasses="py-24">
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
      </Container> */}
    </main>
  );
}
