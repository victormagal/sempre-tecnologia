'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LastPosts, Testimony } from './components/Elements';
import {
  BackgroundContainer,
  Container,
  Slideshow,
  ModalForm
} from './components/Foundation';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Slideshow />
      <section style={{ backgroundColor: '#F8F8F8' }} className="py-6">
        <Container>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              95%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Pós-Venda
            </h2>
          </div>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              98%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Suporte Técnico a Sistemas
            </h2>
          </div>
          <div className="col-span-4 flex flex-col items-center">
            <p className="font-serif text-dark-blue">Satisfação</p>
            <h1 className="font-serif font-bold my-4 text-dark-blue text-7xl">
              85%
            </h1>
            <h2 className="font-sans font-semibold text-soft-gray text-lg text-center w-1/2">
              NPS - Atendimento Certificado Digital
            </h2>
          </div>
        </Container>
      </section>
      <Container newClasses="py-24">
        <div className="col-span-5 flex flex-col justify-center">
          <h2 className="font-serif font-semibold text-dark-blue uppercase">
            Quem somos
          </h2>
          <h1 className="font-serif font-bold my-4 text-dark-blue text-4xl">
            Olá, somos a Sempre Tecnologia.
          </h1>
          <Image
            alt="Sempre mensalidade"
            className="cursor-pointer"
            height={81}
            quality={100}
            src="/play-circle.svg"
            width={81}
          />
        </div>
        <div className="col-span-6 col-end-13">
          <p className="font-sans text-soft-gray mb-8">
            Somos uma empresa especializada em desenvolver sistemas com
            tecnologia própria em plataforma web, gerando mobilidade e segurança
            da informação para nossos clientes. Temos vasta experiência em
            soluções simples e práticas. Atualmente milhares de empresas de
            diversos segmentos utilizam os nossos sistemas.
          </p>
          <p className="font-sans text-soft-gray">
            Além do compromisso com atendimento, temos uma estrutura
            diferenciada, com equipe treinada para implantação e suporte em
            sistemas para micro, pequenas e médias empresas. Credenciada pelo
            Governo Federal, emitimos certificado digital padrão ICP Brasil.
            Nossa matriz está localizada no SIA, em Brasília, além de outras
            filiais no DF, GO, TO, sede em Goiânia, Palmas e Distribuidores no
            Brasil.
          </p>
        </div>
      </Container>
      <section style={{ backgroundColor: '#F8F8F8' }} className="pt-24">
        <Container>
          <div className="col-span-12 mb-8">
            <h1 className="font-serif font-bold text-dark-blue text-2xl">
              Qual a sua necessidade?
            </h1>
            <ul className="flex mt-4 space-x-6">
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Sistema de Gestão para Empresas
              </li>
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Emissão de Nota Eletrônica
              </li>
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Sistema para Pequenos Varejos
              </li>
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Certificado Digital
              </li>
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Sistema para Distribuidores
              </li>
              <li className="cursor-pointer font-sans text-soft-gray hover:text-custom-red text-lg">
                Sistema de Gestão de Recorrência
              </li>
            </ul>
          </div>
          <div className="bg-white col-span-12 drop-shadow grid grid-cols-12 gap-8 py-12">
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-red-600"
              >
                01
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-red-600">
                  Sempre Gestor
                </li>
                <li className="font-serif font-bold text-red-600">
                  Sempre Lite
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Sistemas Web para Gestão Empresarial
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                De empresas que precisam de um sistema de gestão completo,
                empresas com pagamentos recorrentes, até empresas de pequeno
                porte que trabalham com equipes enxutas.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-coin.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Controle de Faturamento: Emita boletos, documentos fiscais e
                    gere relatórios diversos
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-box.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Estoque: Controle entradas e saídas, faça transferências de
                    mercadorias, devoluções, calcule o custo médio e administre
                    múltiplos almoxarifados.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-otimize-6.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Setor Financeiro: Faça a gestão de contas a pagar e a
                    receber, fluxo de caixa, conciliação bancária através de
                    arquivo OFX, crie planos de conta e relatórios gerenciais.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={441}
                quality={100}
                src="/icon-service-01.svg"
                width={435}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/sistemas-web-para-gestao-empresarial"
              >
                Quero contratar esta solução
              </Link>
            </div>
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-custom-orange"
              >
                02
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-custom-orange">
                  Sempre Emissor
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Sistemas Web para Emissão de Nota Eletrônica
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                Esta solução é indicada para clientes que desejam focar seu
                tempo encontrando estratégias comerciais, sem deixar de cumprir
                a obrigatoriedade da emissão de nota fiscal.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <span className="font-sans font-bold text-custom-orange">
                    NFE
                  </span>
                  <span className="font-sans text-soft-gray">
                    Nota Fiscal Eletrônica
                  </span>
                </li>
                <li className="flex space-x-4">
                  <span className="font-sans font-bold text-custom-orange">
                    NFSE
                  </span>
                  <span className="font-sans text-soft-gray">
                    Nota Fiscal Eletrônica de Serviço
                  </span>
                </li>
                <li className="flex space-x-4">
                  <span className="font-sans font-bold text-custom-orange">
                    CTE
                  </span>
                  <span className="font-sans text-soft-gray">
                    Conhecimento de Transporte Eletrônico
                  </span>
                </li>
                <li className="flex space-x-4">
                  <span className="font-sans font-bold text-custom-orange">
                    NFCE
                  </span>
                  <span className="font-sans text-soft-gray">
                    Nota Fiscal de Consumidor Eletrônico
                  </span>
                </li>
                <li className="flex space-x-4">
                  <span className="font-sans font-bold text-custom-orange">
                    MDFE
                  </span>
                  <span className="font-sans text-soft-gray">
                    Manifesto Eletrônico de Documentos Fiscais
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={240}
                quality={100}
                src="/icon-service-02.svg"
                width={236}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/sistemas-web-para-emissao-de-nota-eletronica"
              >
                Quero contratar esta solução
              </Link>
            </div>
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-dark-blue"
              >
                03
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-dark-blue">
                  Sempre PDV
                </li>
                <li className="font-serif font-bold text-dark-blue">
                  Sempre PDV Gestor
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Sistemas para Pequenos Varejos
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                Indicada para comerciantes donos de pequenos empreendimentos,
                essa solução é ideal para negócios que atendam majoritariamente
                pessoa física e que não necessitem de um sistema específico.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-automacao-1.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Independência: Por se tratar de um aplicativo Windows, não
                    depende de browser para funcionar e consegue interagir com o
                    hardware instalado na máquina
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-automacao-2.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Baixo consumo de dados: O consumo de internet é mínimo pois
                    só faz uso de internet no momento de emitir o NFC-e, dessa
                    forma é uma boa solução para quiosques que usam internet
                    móvel.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-automacao-3.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Integração: A transmissão é feita de forma integrada com o
                    sistema web da Sempre, dessa forma é possível acompanhar de
                    qualquer lugar as vendas realizadas nos pontos de venda, sem
                    a necessidade de configurações adicionais.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/praticidade.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Praticidade: Realiza a gestão das vendas antes da emissão do
                    do NFC-e
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-automacao-5.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Conexão: Permite que lojas em localidades distintas
                    compartilhem o mesmo banco de dados, facilitando a gestão do
                    estoque e financeiro.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={240}
                quality={100}
                src="/icon-service-04.svg"
                width={236}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/automacao-comercial"
              >
                Quero contratar esta solução
              </Link>
            </div>
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-custom-green"
              >
                04
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-custom-green">
                  Certificado Digital Express
                </li>
                <li className="font-serif font-bold text-custom-green">
                  Validação Presencial
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Certificado Digital
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                Contadores e empreendedores que cuidem de empresas de qualquer
                porte, valorizam seu tempo equeiram emitir o certificado digital
                ICP-BRasil.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-call-5.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Filiais de atendimento: Temos filiais de atendimento na
                    nossa matriz e em diversas filiais no DF e Goiás.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-facilidade-5.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Facilidade: Assine documentos digitais e faça operações
                    eletrônicas com mais segurança.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-certificado-5.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Certificado Express: Nossos agentes vão até você no entorno
                    do DF e Goiás para emitir o seu certificado digital.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-comodidade-5.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Comodidade: Receba o seu certificado digital na sua empresa
                    ou residência.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={240}
                quality={100}
                src="/icon-service-05.svg"
                width={236}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/sistemas-web-para-emissao-de-nota-eletronica"
              >
                Quero contratar esta solução
              </Link>
            </div>
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-custom-purple"
              >
                05
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-custom-purple">
                  Sempre Distribuidor
                </li>
                <li className="font-serif font-bold text-custom-purple">
                  Sempre Distribuidor Lite
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Sistemas Web para Distribuidores
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                Automatize tarefas e agilize processos internos da sua empresa
                com uma solução prática e fácil de usar. Simplificamos o
                controle da logística de transporte da sua distribuição.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-bag-7.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Facilidades: Funcionalidades específicas que agregam
                    facilidades para o seu ramo de negócios.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-otimizacao-7.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Otimização: Tarefas do dia a dia otimizadas e soluções com
                    funcionalidades ideais para cada segmento.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={240}
                quality={100}
                src="/icon-service-07.svg"
                width={236}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/sempre-distribuidor"
              >
                Quero contratar esta solução
              </Link>
            </div>
            <div className="col-span-2 flex justify-center">
              <h1
                style={{ fontSize: '6rem' }}
                className="font-serif font-light text-dark-yellow"
              >
                06
              </h1>
            </div>
            <div className="col-span-5 py-8">
              <ul className="flex mb-2 space-x-4">
                <li className="font-serif font-bold text-dark-yellow">
                  Sempre Mensalidade
                </li>
              </ul>
              <h1 className="font-serif font-bold mb-4 text-dark-blue text-2xl">
                Sistemas Web para Gestão de Recorrência
              </h1>
              <h2 className="font-serif font-bold mb-2 text-dark-blue">
                Para quem é indicado:
              </h2>
              <p className="font-serif mb-8 text-soft-gray">
                O Sempre Mensalidade é um sistema de gestão e controle de
                recorrência. Essa solução é ideal para empresas que cobram
                mensalidade dos seus clientes.
              </p>
              <h2 className="font-serif font-bold mb-4 text-dark-blue">
                Características
              </h2>
              <ul className="flex flex-col space-y-5">
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-alert.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Alertas automáticos: Alertas de cobrança enviados
                    automaticamente, controle de entrega e leitura de e-mail e
                    régua de cobrança personalizada.
                  </span>
                </li>
                <li className="flex space-x-4">
                  <Image
                    alt="Sempre mensalidade"
                    className="cursor-pointer"
                    height={22}
                    quality={100}
                    src="/icon-recieve.svg"
                    width={22}
                  />
                  <span className="font-sans text-soft-gray">
                    Relatórios Gerenciais: Tenha relatórios de faturamento e
                    inadimplência com fácil acesso, também via app mobile e
                    garanta para sua empresa mais organização e praticidade.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-span-5 flex flex-col justify-center items-center space-y-4">
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={240}
                quality={100}
                src="/ilustra-sempre-mensalidade.svg"
                width={236}
              />
              <Link
                style={{
                  background:
                    'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
                }}
                className="font-bold px-14 py-3 text-sm text-white rounded"
                href="/sempre-mensalidade"
              >
                Quero contratar esta solução
              </Link>
            </div>
          </div>
        </Container>
        <Container newClasses="pt-24">
          <ul className="col-span-12 flex justify-between">
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={64}
                quality={100}
                src="/logo-gelo.png"
                width={103}
              />
            </li>
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={46}
                quality={100}
                src="/logo-smart-fit.png"
                width={124}
              />
            </li>
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={43}
                quality={100}
                src="/sesi.png"
                width={133}
              />
            </li>
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={49}
                quality={100}
                src="/logo-litoral-pescados.png"
                width={92}
              />
            </li>
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={55}
                quality={100}
                src="/logo-sebrae.png"
                width={113}
              />
            </li>
            <li>
              <Image
                alt="Sempre mensalidade"
                className="cursor-pointer"
                height={34}
                quality={100}
                src="/logo-coco.png"
                width={175}
              />
            </li>
          </ul>
        </Container>
      </section>
      <Testimony />
      <BackgroundContainer uri="/bg-agenda.jpg">
        <div className="col-span-6 col-start-4 flex flex-col items-center">
          <h1 className="font-serif font-semibold text-white text-4xl">
            Seja SEMPRE!
          </h1>
          <p className="font-sans my-8 text-white text-center">
            Venha para a Sempre Tecnologia. Nós desenvolvemos sistemas que vão
            alavancar o seu negócio. Deixe seus dados, entraremos em contato!
          </p>
          <button
            className="border border-white font-sans font-bold py-4 text-sm text-white rounded w-2/4"
            onClick={() => setOpenModal(true)}
            type="button"
          >
            Agende um horário
          </button>
        </div>
      </BackgroundContainer>
      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <Container>
          <div className="col-span-10 mb-6">
            <h1 className="font-serif font-semibold text-4xl text-dark-blue">
              Veja os últimos conteúdos do nosso Blog
            </h1>
          </div>
          <div className="col-span-2 flex justify-end mb-6">
            <Link
              className="bg-custom-red font-sans font-bold py-4 rounded text-center text-xs text-white uppercase w-2/3"
              href="/noticias"
            >
              Ver mais
            </Link>
          </div>
          <LastPosts />
        </Container>
      </section>
    </>
  );
}
