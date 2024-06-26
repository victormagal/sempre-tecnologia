/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralMid, neutralLight, red } from '@/app/base/Colors';
import RegularIcon from '@/app/base/RegularIcon';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Text, Title } from '@/app/base/Typography';

export default function HeaderMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="block lg:hidden">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <section
        className="fixed top-0 w-full z-50"
        style={{ backgroundColor: neutralLight[100] }}
      >
        <div
          className="border-b py-6"
          style={{ borderColor: neutralLight[400] }}
        >
          <Container>
            <div className="col-span-4 flex justify-between items-center">
              <Link href="/">
                <Image
                  alt="Sempre Tecnologia"
                  height={46}
                  src="/logo-positiva.svg"
                  width={172}
                />
              </Link>
              <button
                className="block text-gray-700 hover:text-gray-900 focus:text-gray-900 focus:outline-none col-span-1 order-last"
                onClick={burgerMenu}
              >
                {!isOpen ? (
                  <SolidIcon
                    icon="faBars"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                ) : (
                  <SolidIcon
                    icon="faXmark"
                    iconColor={neutralMid[400]}
                    newClasses="h-8"
                  />
                )}
              </button>
            </div>
          </Container>
        </div>
        {isOpen && (
          <>
            <Container newClasses="py-6">
              <div
                className="col-span-4"
                style={{ backgroundColor: neutralLight[100] }}
              >
                <ul className="flex flex-col space-y-6">
                  <li>
                    <Link onClick={burgerMenu} href="/sobre">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Quem somos
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Nossos Sistemas
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <li>
                            <details className="flex flex-col space-y-6">
                              <summary className="flex items-center justify-between">
                                <Overline
                                  appearance="o1"
                                  color={neutralDark[500]}
                                >
                                  Distribuidores
                                </Overline>
                                <SolidIcon
                                  icon="faChevronDown"
                                  iconColor={red[900]}
                                  newClasses="h-4"
                                />
                              </summary>
                              <article>
                                <ul className="flex flex-col space-y-4">
                                  <Link
                                    onClick={burgerMenu}
                                    href="/pescados-suinos-e-bovinos"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faCow"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Pescados, Bovinos e Suínos
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/hortifruti">
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faSeedling"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Hortifruti
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/cosmeticos">
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faEye"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Cosméticos
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/picoles-e-sorvetes"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faIceCream"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Picolés e Sorvetes
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/paes-e-salgados"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faBreadSlice"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Pães e Salgados
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/distribuidores"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faStar"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Outras categorias
                                      </Text>
                                    </li>
                                  </Link>
                                </ul>
                              </article>
                            </details>
                          </li>
                          <li>
                            <details className="flex flex-col space-y-6">
                              <summary className="flex items-center justify-between">
                                <Overline
                                  appearance="o1"
                                  color={neutralDark[500]}
                                >
                                  Gestão de produtos
                                </Overline>
                                <SolidIcon
                                  icon="faChevronDown"
                                  iconColor={red[900]}
                                  newClasses="h-4"
                                />
                              </summary>
                              <article>
                                <ul className="flex flex-col space-y-4">
                                  <Link
                                    onClick={burgerMenu}
                                    href="/vestuarios-e-calcados"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faShirt"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Vestuário e Calçado
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/industria">
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faScissors"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Indústria
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/moveis-e-colchoes"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faChair"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Móveis e Colchões
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/industria">
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faStar"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Outras categorias
                                      </Text>
                                    </li>
                                  </Link>
                                </ul>
                              </article>
                            </details>
                          </li>
                          <li>
                            <details className="flex flex-col space-y-6">
                              <summary className="flex items-center justify-between">
                                <Overline
                                  appearance="o1"
                                  color={neutralDark[500]}
                                >
                                  Gestão de serviços
                                </Overline>
                                <SolidIcon
                                  icon="faChevronDown"
                                  iconColor={red[900]}
                                  newClasses="h-4"
                                />
                              </summary>
                              <article>
                                <ul className="flex flex-col space-y-4">
                                  <Link onClick={burgerMenu} href="/bpo">
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faCalculator"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        BPO
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/construtoras-e-engenharias"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faTractor"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Construtoras e Engenharias
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/seguranca-limpeza-e-conservacao"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faBuildingShield"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Segurança, Limpeza e Conservação
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/manutencao-e-Instalacoes"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faHelmetSafety"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Manutenção e Instalações
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/prestadores-de-servico"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faStar"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Outras categorias
                                      </Text>
                                    </li>
                                  </Link>
                                </ul>
                              </article>
                            </details>
                          </li>
                          <li>
                            <details className="flex flex-col space-y-6">
                              <summary className="flex items-center justify-between">
                                <Overline
                                  appearance="o1"
                                  color={neutralDark[500]}
                                >
                                  Cobranças recorrentes
                                </Overline>
                                <SolidIcon
                                  icon="faChevronDown"
                                  iconColor={red[900]}
                                  newClasses="h-4"
                                />
                              </summary>
                              <article>
                                <ul className="flex flex-col space-y-4">
                                  <Link
                                    onClick={burgerMenu}
                                    href="/contabilidade"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faCalculator"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Contabilidades
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link href="/associacoes-e-sindicatos">
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faHandshake"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Associações e Sindicatos
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/clubes">
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faWaterLadder"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Clubes
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link onClick={burgerMenu} href="/cursos">
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faBook"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Cursos
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/condominios"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faBuilding"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Condomínios
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/locacoes-e-servicos"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faBellConcierge"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Locações e Serviços
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/recorrentes"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faStar"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Outras categorias
                                      </Text>
                                    </li>
                                  </Link>
                                </ul>
                              </article>
                            </details>
                          </li>
                          <li>
                            <details className="flex flex-col space-y-6">
                              <summary className="flex items-center justify-between">
                                <Overline
                                  appearance="o1"
                                  color={neutralDark[500]}
                                >
                                  Documentos fiscais
                                </Overline>
                                <SolidIcon
                                  icon="faChevronDown"
                                  iconColor={red[900]}
                                  newClasses="h-4"
                                />
                              </summary>
                              <article>
                                <ul className="flex flex-col space-y-4">
                                  <Link
                                    onClick={burgerMenu}
                                    href="/emissao-de-notas-fiscais-de-produtos-nf-e"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faFileLines"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        NF-e Nota Fiscal Produtos
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/nota-fiscal-de-servico-eletronica-nfs-e"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faFileLines"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        NFS-e Nota Fiscal Serviços
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/conhecimento-de-transporte-eletronico-ct-e"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faCarSide"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        CT-e Conhecimento de Transporte
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/manifesto-documentos-fiscais-mdf-e"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <SolidIcon
                                        icon="faArrowsUpDownLeftRight"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        MDF-e Manifesto Documentos Fiscais
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/nota-fiscal-ao-consumidor-eletronica-nfc-e"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faUser"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        NFC-e Nota Fiscal Consumidor
                                      </Text>
                                    </li>
                                  </Link>
                                  <Link
                                    onClick={burgerMenu}
                                    href="/documentos-fiscais"
                                  >
                                    <li className="flex items-center space-x-4">
                                      <RegularIcon
                                        icon="faStar"
                                        iconColor={red[900]}
                                        newClasses="h-6 w-8"
                                      />
                                      <Text
                                        appearance="p4"
                                        color={neutralMid[600]}
                                      >
                                        Outras categorias
                                      </Text>
                                    </li>
                                  </Link>
                                </ul>
                              </article>
                            </details>
                          </li>
                        </ul>
                      </article>
                    </details>
                  </li>
                  <li>
                    <Link
                      onClick={burgerMenu}
                      href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}`}
                      target="_blank"
                    >
                      <Title appearance="h6" color={neutralDark[500]}>
                        Certificado Digital
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Seja um parceiro
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <Link onClick={burgerMenu} href="/contador">
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Parceria para Contadores
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Conheça e aproveite benefícios exclusivos
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link onClick={burgerMenu} href="/parceria">
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faFileLines"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Parceria em Certificado Digital
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Programa de parceria para venda de Certificado
                                  Digital
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                  <li>
                    <Link onClick={burgerMenu} href="/noticias?pagina=1">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Blog
                      </Title>
                    </Link>
                  </li>
                  <li>
                    <details className="flex flex-col space-y-6">
                      <summary className="flex items-center justify-between">
                        <Title appearance="h6" color={neutralDark[500]}>
                          Suporte
                        </Title>
                        <SolidIcon
                          icon="faChevronDown"
                          iconColor={neutralMid[500]}
                          newClasses="h-4"
                        />
                      </summary>
                      <article>
                        <ul className="flex flex-col space-y-6">
                          <Link onClick={burgerMenu} href="/suporte">
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faMobileScreenButton"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Suporte
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Sistemas
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link
                            onClick={burgerMenu}
                            href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/suporte-certificado`}
                          >
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faMobileScreenButton"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Suporte
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Certificado Digital
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link
                            onClick={burgerMenu}
                            href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/certificado-a1`}
                          >
                            <li className="flex space-x-4">
                              <div>
                                <SolidIcon
                                  icon="faDesktop"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Instalação Certificado Digital A1
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Computador
                                </Text>
                              </div>
                            </li>
                          </Link>
                          <Link
                            onClick={burgerMenu}
                            href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/certificado-a3`}
                          >
                            <li className="flex space-x-4">
                              <div>
                                <RegularIcon
                                  icon="faHardDrive"
                                  iconColor={red[600]}
                                  newClasses="h-6"
                                />
                              </div>
                              <div>
                                <Title appearance="h7" color={neutralDark[500]}>
                                  Instalação Certificado Digital A3
                                </Title>
                                <Text appearance="p4" color={neutralMid[500]}>
                                  Cartão e Token
                                </Text>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </article>
                    </details>
                  </li>
                  <li>
                    <Link onClick={burgerMenu} href="/contato">
                      <Title appearance="h6" color={neutralDark[500]}>
                        Contato
                      </Title>
                    </Link>
                  </li>
                </ul>
              </div>
            </Container>
            <div
              className="border-t"
              style={{ borderColor: neutralLight[400] }}
            >
              <Container>
                <div className="col-span-4 p-4">
                  <Link href="https://api.whatsapp.com/send?phone=556130839390">
                    <button
                      className="py-3 rounded-md w-full"
                      style={{
                        background: red[1000]
                      }}
                      type="button"
                    >
                      <Title appearance="h6" color={neutralLight[100]}>
                        Fale agora
                      </Title>
                    </button>
                  </Link>
                </div>
              </Container>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
