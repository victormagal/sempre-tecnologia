/* eslint-disable no-undef */
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import RegularIcon from '@/app/base/RegularIcon';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Text, Title } from '@/app/base/Typography';

export default function Header() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('click', closeDropdownItens);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();

    const nextElement = e.currentTarget.nextSibling;
    const allElements = [...document.getElementsByClassName('dropDown')];

    allElements.map((element) => {
      if (element === nextElement && element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    });
  };

  const closeDropdownItens = () => {
    const elements = [...document.getElementsByClassName('dropDown')];

    elements.map((element) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    });
  };

  return (
    <header className="lg:block lg:border-b fixed hidden w-full z-60">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container bgColor={neutralLight[100]} newClasses="py-7">
        <div className="col-span-2 flex justify-center items-center">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={46}
              src="/logo-positiva.svg"
              width={172}
            />
          </Link>
        </div>
        <nav className="col-end-13 col-span-10">
          <ul className="flex items-center justify-end space-x-3 xl:space-x-8">
            <li>
              <Link href="/sobre">
                <Text appearance="p4" color={neutralMid[600]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Nossos Sistemas
                </Text>
                <SolidIcon
                  icon="faChevronDown"
                  iconColor={neutralMid[600]}
                  newClasses="h-3"
                />
              </button>
              <nav
                className="absolute dropDown drop-shadow hidden mt-4 p-8 translate-x-[-30%] xl:translate-x-[-35%]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: neutralLight[100] }}
              >
                <div className="flex space-x-12 xl:space-x-6">
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[220px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Distribuidores
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/pescados-suinos-e-bovinos"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCow"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Pescados, Bovinos e Suínos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/hortifruti">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faSeedling"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Hortifruti
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/cosmeticos">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faEye"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Cosméticos
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/picoles-e-sorvetes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faIceCream"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Picolés e Sorvetes
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/paes-e-salgados">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBreadSlice"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Pães e Salgados
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/distribuidores">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[220px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Gestão de produtos
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/vestuarios-e-calcados"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faShirt"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Vestuário e Calçado
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/industria">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faScissors"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Indústria
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/moveis-e-colchoes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faChair"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Móveis e Colchões
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/industria">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[220px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Gestão de serviços
                      </Overline>
                    </li>
                    <Link onClick={closeDropdownItens} href="/bpo">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCalculator"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          BPO
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/construtoras-e-engenharias"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faTractor"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Construtoras e Engenharias
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/seguranca-limpeza-e-conservacao"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBuildingShield"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Segurança, Limpeza e Conservação
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/manutencao-e-Instalacoes"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faHelmetSafety"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Manutenção e Instalações
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/prestadores-de-servico"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[220px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Cobranças recorrentes
                      </Overline>
                    </li>
                    <Link onClick={closeDropdownItens} href="/contabilidade">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCalculator"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Contabilidades
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/associacoes-e-sindicatos"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faHandshake"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Associações e Sindicatos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/clubes">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faWaterLadder"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Clubes
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/cursos">
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBook"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Cursos
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/condominios">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faBuilding"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Condomínios
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/locacoes-e-servicos"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faBellConcierge"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Locações e Serviços
                        </Text>
                      </li>
                    </Link>
                    <Link onClick={closeDropdownItens} href="/recorrentes">
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                  <ul className="flex flex-col space-y-8 w-[150px] xl:w-[220px]">
                    <li>
                      <Overline appearance="o1" color={neutralMid[600]}>
                        Documentos fiscais
                      </Overline>
                    </li>
                    <Link
                      onClick={closeDropdownItens}
                      href="/emissao-de-notas-fiscais-de-produtos-nf-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faFileLines"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NF-e Nota Fiscal Produtos
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/nota-fiscal-de-servico-eletronica-nfs-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faFileLines"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NFS-e Nota Fiscal Serviços
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/conhecimento-de-transporte-eletronico-ct-e"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faCarSide"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          CT-e Conhecimento de Transporte
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/manifesto-documentos-fiscais-mdf-e"
                    >
                      <li className="flex items-center space-x-4">
                        <SolidIcon
                          icon="faArrowsUpDownLeftRight"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          MDF-e Manifesto Documentos Fiscais
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/nota-fiscal-ao-consumidor-eletronica-nfc-e"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faUser"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          NFC-e Nota Fiscal Consumidor
                        </Text>
                      </li>
                    </Link>
                    <Link
                      onClick={closeDropdownItens}
                      href="/documentos-fiscais"
                    >
                      <li className="flex items-center space-x-4">
                        <RegularIcon
                          icon="faStar"
                          iconColor={red[900]}
                          newClasses="h-6 w-8"
                        />
                        <Text appearance="p4" color={neutralMid[600]}>
                          Outras categorias
                        </Text>
                      </li>
                    </Link>
                  </ul>
                </div>
              </nav>
            </li>
            <li>
              <Link
                href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}`}
                target="_blank"
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Certificado Digital
                </Text>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Seja um parceiro
                </Text>
                <SolidIcon
                  icon="faChevronDown"
                  iconColor={neutralMid[600]}
                  newClasses="h-3"
                />
              </button>
              <ul
                className="absolute dropDown drop-shadow hidden mt-4 p-6 w-[360px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: neutralLight[100] }}
              >
                <Link onClick={closeDropdownItens} href="/contador">
                  <li className="flex items-start mb-4 space-x-4">
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
                <Link onClick={closeDropdownItens} href="/parceria">
                  <li className="flex items-start space-x-4">
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
                        Programa de parceria para venda de Certificado Digital
                      </Text>
                    </div>
                  </li>
                </Link>
              </ul>
            </li>
            <li>
              <Link href="/noticias?pagina=1">
                <Text appearance="p4" color={neutralMid[600]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <button
                className="flex items-center space-x-2"
                onClick={toggleMenu}
              >
                <Text appearance="p4" color={neutralMid[600]}>
                  Suporte
                </Text>
                <SolidIcon
                  icon="faChevronDown"
                  iconColor={neutralMid[600]}
                  newClasses="h-3"
                />
              </button>
              <ul
                className="absolute dropDown drop-shadow hidden mt-4 p-6 w-[360px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                style={{ backgroundColor: neutralLight[100] }}
              >
                <Link onClick={closeDropdownItens} href="/suporte">
                  <li className="flex items-start mb-4 space-x-4">
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
                  onClick={closeDropdownItens}
                  href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/suporte-certificado`}
                  target="_blank"
                >
                  <li className="flex items-start mb-4 space-x-4">
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
                  onClick={closeDropdownItens}
                  href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/certificado-a1`}
                  target="_blank"
                >
                  <li className="flex items-start mb-4 space-x-4">
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
                  onClick={closeDropdownItens}
                  href={`${process.env.NEXT_PUBLIC_SEMPRE_CERTIFICADORA_URL}/certificado-a3`}
                  target="_blank"
                >
                  <li className="flex items-start space-x-4">
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
            </li>
            <li>
              <Link href="/contato">
                <Text appearance="p4" color={neutralMid[600]}>
                  Contato
                </Text>
              </Link>
            </li>
            <li>
              <Link href="https://api.whatsapp.com/send?phone=556130839390">
                <button
                  className="px-8 py-3 rounded"
                  style={{
                    background: red[1000]
                  }}
                  type="button"
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    Fale agora
                  </Text>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
