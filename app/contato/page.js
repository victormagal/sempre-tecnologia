'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { ContactForm } from '../components/Elements';
import { Container, ModalForm } from '../components/Foundation';

export default function Contato() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <main className="pt-24">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container bgColor={neutralLight[100]} newClasses="py-16">
        <div className="col-span-4 lg:col-span-6 lg:col-start-4 flex flex-col items-center space-y-6">
          <Overline appearance="o1" className="text-center" color={red[700]}>
            Fale Conosco
          </Overline>
          <Text appearance="p1" className="text-center" color={neutralMid[500]}>
            Nossa equipe está sempre à disposição para conversar com você!
          </Text>
        </div>
      </Container>
      <Container newClasses="border-b pb-16">
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faHeadset" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Central de Vendas
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            Segunda à sexta (8h às 18h)
          </Text>
          <div className="text-center">
            <Link href="tel:08009416260">
              <Title appearance="h7" color={red[1000]}>
                0800 941 6260
              </Title>
            </Link>
            <Link href="https://api.whatsapp.com/send?phone=556130839390">
              <Title appearance="h7" color={red[1000]}>
                WhatsApp
              </Title>
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faHeadset" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Suporte Sistemas
          </Title>
          <div className="text-center">
            <Text
              appearance="p4"
              className="text-center"
              color={neutralMid[500]}
            >
              Segunda à sexta (8h às 18h)
            </Text>
            <Text
              appearance="p4"
              className="text-center"
              color={neutralMid[500]}
            >
              Sábado (8h às 12h)
            </Text>
          </div>
          <div className="text-center">
            <Link href="tel:+556130839370">
              <Title appearance="h7" color={red[1000]}>
                (61) 3083-9370
              </Title>
            </Link>
            <Link href="mailto:contato@suportesistemas.com.br">
              <Title appearance="h7" color={red[1000]}>
                contato@suportesistemas.com.br
              </Title>
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faHeadset" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Suporte Certificado
          </Title>
          <Text appearance="p4" className="text-center" color={neutralMid[500]}>
            Segunda à sexta (8h às 18h)
          </Text>
          <div className="text-center">
            <Link href="tel:+556130839380">
              <Title appearance="h7" color={red[1000]}>
                (61) 3083-9380
              </Title>
            </Link>
            <Link href="mailto:suporte@semprecertificado.com.br">
              <Title appearance="h7" color={red[1000]}>
                suporte@semprecertificado.com.br
              </Title>
            </Link>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col items-center space-y-2">
          <div
            className="flex h-10 items-center justify-center mb-4 rounded-full w-10"
            style={{
              background: red[100]
            }}
          >
            <SolidIcon icon="faPhone" iconColor={red[700]} newClasses="h-5" />
          </div>
          <Title appearance="h5" color={neutralDark[500]}>
            Agende seu contato
          </Title>
          <button onClick={() => setOpenModal(true)} type="button">
            <Title appearance="h7" color={red[1000]}>
              Agendar ligação
            </Title>
          </button>
          <Link href="mailto:suporte@semprecertificado.com.br">
            <Title appearance="h7" color={red[1000]}>
              Email: contato@sempretecnologia.com.br
            </Title>
          </Link>
        </div>
      </Container>
      <Container newClasses="lg:pb-16 pt-16">
        <div className="col-span-4 lg:col-span-5 lg:col-start-2">
          <div className="flex flex-col mb-12 space-y-4">
            <Overline appearance="o1" color={red[700]}>
              Fale conosco
            </Overline>
            <Title appearance="h2" color={neutralDark[600]} extra>
              Entrar em contato
            </Title>
            <Text appearance="p3" color={neutralMid[500]}>
              Por favor, preencha o formulário e entraremos em contato.
            </Text>
          </div>
          <ContactForm
            companyForm={false}
            messageForm={true}
            placesForm={false}
          />
        </div>
        <div className="col-span-4 lg:col-span-5 flex items-stretch justify-center lg:justify-end">
          <div className="self-center">
            <Image
              alt="Portal Sempre Contador"
              height={773}
              width={536}
              src="/img-contato.png"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
