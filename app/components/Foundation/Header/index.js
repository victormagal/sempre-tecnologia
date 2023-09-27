'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralDark, neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text } from '@/app/base/Typography';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white fixed w-full z-60 lg:border-b">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />

      {/* menu desktop */}
      <Container newClasses="hidden lg:grid py-6">
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
        <nav className="col-end-13 col-span-9 flex space-x-4 justify-between items-center">
          <ul className="flex items-center justify-between w-full ">
            <li className=" p-4 mb-2">
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Home
                </Text>
              </Link>
            </li>
            <li className=" p-4 mb-2">
              <Link href="/sobre">
                <Text appearance="p4" color={neutralMid[600]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li className="p-4 mb-2">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Segmentos
                </Text>
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </button>
              <ul
                className="fixed left-52 dropDown drop-shadow hidden pt-6 bg-white px-4 flex gap-6"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <li className="flex-1">
                  <ul>
                    <span className="text-xs uppercase font-bold">
                      Distribuidores
                    </span>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/pescados.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Pescados, bovinos e suínos
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/paes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Pães e salgados
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/hortifruti.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Hortifruti
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/cosmeticos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Comésticos
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/picoles.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Picolés e sorvetes
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <span className="text-xs uppercase font-bold">
                      Pequenos varejos
                    </span>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/vestuarios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Vestuários e calçados
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/barbearias.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Barbearias e salões de beleza
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/petshops.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Petshops
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/lanchonetes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Lanchonetes e quiosques
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/moveis.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Móveis e colchões
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <span className="text-xs uppercase font-bold">
                      Prestadores de serviço
                    </span>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/contabilidades.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Contabilidades e BPO
                    </li>
                    <li className="flex text-sm py-3 mb-2 w-full">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/construtoras.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Construtoras e Engenharias
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/consultorios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Consultórios
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/seguranca.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Segurança, limpeza e conservação
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/manutencao.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Manutenção e instalações
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <span className="text-xs uppercase font-bold">
                      Recorrentes
                    </span>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/associacoes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Associações e sindicatos
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/clubes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Clubes
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/cursos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Cursos
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/condominios.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Condomínios
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/locacoes.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      Locações e serviços
                    </li>
                  </ul>
                </li>

                <li className="flex-1">
                  <ul>
                    <span className="text-xs uppercase font-bold">
                      Documentos fiscais
                    </span>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfprodutos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      NF-e Nota Fiscal Produtos
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfservicos.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      NF-e Nota Fiscal Serviços
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/conhecimento.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      CT-e Conhecimento de transporte
                    </li>
                    <li className="flex text-sm py-3 mb-2">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/manifesto.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      MDF-e Manifesto destinatário
                    </li>
                    <li className="flex text-sm py-3">
                      <Image
                        alt=""
                        height={24}
                        quality={100}
                        src="/menu-icons/nfconsumidor.svg"
                        width={27}
                        className="inline-block mr-4"
                      />
                      NFC-e Nota Fiscal Consumidor
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className=" p-4 mb-2">
              <Link href="/parceria">
                <Text appearance="p4" color={neutralMid[600]}>
                  Certificado Digital
                </Text>
              </Link>
            </li>
            <li className="p-4 mb-2">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Seja um parceiro
                </Text>
                <FontAwesomeIcon className="ml-2" icon={faChevronDown} />
              </button>
              <ul
                className="absolute dropDown drop-shadow hidden pt-6 bg-white px-4 w-[328px]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span className="text-xs uppercase font-bold">
                  <Image
                    alt=""
                    height={24}
                    quality={100}
                    src="/menu-icons/parceiro.svg"
                    width={27}
                    className="inline-block mr-4"
                  />
                  Programa de parceria para Contadores
                </span>
                <li className="flex text-sm py-3 mb-2">
                  Conheça e aproveite benefícios exclusivos.
                </li>

                <span className="text-xs uppercase font-bold">
                  <Image
                    alt=""
                    height={24}
                    quality={100}
                    src="/menu-icons/parceiro.svg"
                    width={27}
                    className="inline-block mr-4"
                  />
                  Seja um parceiro certificador
                </span>
                <li className="flex text-sm py-3 mb-2">
                  Programa de parceria para venda de Certificado Digital e
                  Sistemas Web de Gestão.
                </li>
              </ul>
            </li>
            <li className=" p-4 mb-2">
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li className=" p-4 mb-2">
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Suporte
                </Text>
              </Link>
            </li>
            <li className=" p-4 mb-2">
              <Link href="/contato">
                <Text appearance="p4" color={neutralMid[600]}>
                  Contato
                </Text>
              </Link>
            </li>
            <li className=" p-4 mb-2">
              <button
                className="px-8 py-3 rounded"
                onClick={() => setOpenModal(true)}
                style={{
                  background: red[1000]
                }}
                type="button"
              >
                <Text appearance="p4" color={neutralLight[100]}>
                  Fale agora
                </Text>
              </button>
            </li>
          </ul>
        </nav>
      </Container>

      {/* menu mobile */}
      <Container newClasses="lg:hidden flex flex-col py-6">
        <div className="col-span-8 flex justify-between items-center">
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
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  d="M9.5 12.125C9.5 11.5156 9.96875 11 10.625 11H29.375C29.9844 11 30.5 11.5156 30.5 12.125C30.5 12.7812 29.9844 13.25 29.375 13.25H10.625C9.96875 13.25 9.5 12.7812 9.5 12.125ZM9.5 19.625C9.5 19.0156 9.96875 18.5 10.625 18.5H29.375C29.9844 18.5 30.5 19.0156 30.5 19.625C30.5 20.2812 29.9844 20.75 29.375 20.75H10.625C9.96875 20.75 9.5 20.2812 9.5 19.625ZM29.375 28.25H10.625C9.96875 28.25 9.5 27.7812 9.5 27.125C9.5 26.5156 9.96875 26 10.625 26H29.375C29.9844 26 30.5 26.5156 30.5 27.125C30.5 27.7812 29.9844 28.25 29.375 28.25Z"
                  fill="#6B778C"
                />
              ) : (
                <path
                  d="M27.125 25.5781C27.5469 26.0469 27.5469 26.75 27.125 27.1719C26.6562 27.6406 25.9531 27.6406 25.5312 27.1719L20 21.5938L14.4219 27.1719C13.9531 27.6406 13.25 27.6406 12.8281 27.1719C12.3594 26.75 12.3594 26.0469 12.8281 25.5781L18.4062 20L12.8281 14.4219C12.3594 13.9531 12.3594 13.25 12.8281 12.8281C13.25 12.3594 13.9531 12.3594 14.375 12.8281L20 18.4531L25.5781 12.875C26 12.4062 26.7031 12.4062 27.125 12.875C27.5938 13.2969 27.5938 14 27.125 14.4688L21.5469 20L27.125 25.5781Z"
                  fill="#6B778C"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="fixed z-10 top-0 top-20 left-0 mt-2 bg-white text-gray-800 border rounded-lg shadow-lg h-screen w-screen">
            <ul className="flex flex-col justify-stretch w-full px-4 py-4">
              <li className="p-4 mb-2 font-bold">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Home
                  </Text>
                </Link>
              </li>
              <li className=" p-4 mb-2">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Quem somos
                  </Text>
                </Link>
              </li>
              <li className="relative p-4 mb-2">
                <button className="flex w-full" onClick={toggleMenu}>
                  <Text appearance="p4" color={neutralDark[500]}>
                    Segmentos
                  </Text>
                  <FontAwesomeIcon
                    className="absolute right-0"
                    icon={faChevronDown}
                  />
                </button>
                <ul className="fixed left-52 dropDown drop-shadow pt-6 bg-white px-4 flex gap-6">
                  <li className="flex-1">
                    <ul>
                      <span className="text-xs uppercase font-bold">
                        Distribuidores
                      </span>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/pescados.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Pescados, bovinos e suínos
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/paes.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Pães e salgados
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/hortifruti.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Hortifruti
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/cosmeticos.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Comésticos
                      </li>
                      <li className="flex text-sm py-3">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/picoles.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Picolés e sorvetes
                      </li>
                    </ul>
                  </li>

                  <li className="flex-1">
                    <ul>
                      <span className="text-xs uppercase font-bold">
                        Pequenos varejos
                      </span>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/vestuarios.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Vestuários e calçados
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/barbearias.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Barbearias e salões de beleza
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/petshops.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Petshops
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/lanchonetes.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Lanchonetes e quiosques
                      </li>
                      <li className="flex text-sm py-3">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/moveis.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Móveis e colchões
                      </li>
                    </ul>
                  </li>

                  <li className="flex-1">
                    <ul>
                      <span className="text-xs uppercase font-bold">
                        Prestadores de serviço
                      </span>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/contabilidades.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Contabilidades e BPO
                      </li>
                      <li className="flex text-sm py-3 mb-2 w-full">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/construtoras.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Construtoras e Engenharias
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/consultorios.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Consultórios
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/seguranca.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Segurança, limpeza e conservação
                      </li>
                      <li className="flex text-sm py-3">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/manutencao.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Manutenção e instalações
                      </li>
                    </ul>
                  </li>

                  <li className="flex-1">
                    <ul>
                      <span className="text-xs uppercase font-bold">
                        Recorrentes
                      </span>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/associacoes.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Associações e sindicatos
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/clubes.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Clubes
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/cursos.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Cursos
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/condominios.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Condomínios
                      </li>
                      <li className="flex text-sm py-3">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/locacoes.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        Locações e serviços
                      </li>
                    </ul>
                  </li>

                  <li className="flex-1">
                    <ul>
                      <span className="text-xs uppercase font-bold">
                        Documentos fiscais
                      </span>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/nfprodutos.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        NF-e Nota Fiscal Produtos
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/nfservicos.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        NF-e Nota Fiscal Serviços
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/conhecimento.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        CT-e Conhecimento de transporte
                      </li>
                      <li className="flex text-sm py-3 mb-2">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/manifesto.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        MDF-e Manifesto destinatário
                      </li>
                      <li className="flex text-sm py-3">
                        <Image
                          alt=""
                          height={24}
                          quality={100}
                          src="/menu-icons/nfconsumidor.svg"
                          width={27}
                          className="inline-block mr-4"
                        />
                        NFC-e Nota Fiscal Consumidor
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className=" p-4">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Certificado Digital
                  </Text>
                </Link>
              </li>
              <li className=" p-4 mb-2 relative">
                <button className="flex w-full" onClick={toggleMenu}>
                  <Text appearance="p4" color={neutralDark[500]}>
                    Seja um parceiro
                  </Text>
                  <FontAwesomeIcon
                    className="absolute right-0"
                    icon={faChevronDown}
                  />
                </button>
                <ul className="absolute dropDown drop-shadow hidden pt-6 bg-white px-4 w-[328px]">
                  <span className="text-xs uppercase font-bold">
                    <Image
                      alt=""
                      height={24}
                      quality={100}
                      src="/menu-icons/parceiro.svg"
                      width={27}
                      className="inline-block mr-4"
                    />
                    Programa de parceria para Contadores
                  </span>
                  <li className="flex text-sm py-3 mb-2">
                    Conheça e aproveite benefícios exclusivos.
                  </li>

                  <span className="text-xs uppercase font-bold">
                    <Image
                      alt=""
                      height={24}
                      quality={100}
                      src="/menu-icons/parceiro.svg"
                      width={27}
                      className="inline-block mr-4"
                    />
                    Seja um parceiro certificador
                  </span>
                  <li className="flex text-sm py-3 mb-2">
                    Programa de parceria para venda de Certificado Digital e
                    Sistemas Web de Gestão.
                  </li>
                </ul>
              </li>
              <li className=" p-4 mb-2">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Blog
                  </Text>
                </Link>
              </li>
              <li className=" p-4 mb-2">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Suporte
                  </Text>
                </Link>
              </li>
              <li className=" p-4 mb-2">
                <Link href="/">
                  <Text appearance="p4" color={neutralDark[500]}>
                    Contato
                  </Text>
                </Link>
              </li>
              <li className="p-4 fixed bottom-0 w-full left-0 p-6 border-t-2">
                <button
                  className="px-8 py-3 w-full rounded-md"
                  onClick={() => setOpenModal(true)}
                  style={{
                    background: red[1000]
                  }}
                  type="button"
                >
                  <Text appearance="p4" color={neutralLight[100]}>
                    Fale agora
                  </Text>
                </button>
              </li>
            </ul>{' '}
          </div>
        )}
      </Container>
    </header>
  );
}
