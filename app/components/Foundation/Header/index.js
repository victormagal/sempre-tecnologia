'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { neutralLight, neutralMid, red } from '@/app/base/Colors';
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

  return (
    <header className="bg-white fixed w-full z-60 border-b">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <Container newClasses="py-6">
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
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Home
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Quem somos
                </Text>
              </Link>
            </li>
            <li className="relative">
              <button className="flex" onClick={toggleMenu}>
                <Text appearance="p4" color={neutralMid[600]}>
                  Segmentos
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
                  Distribuidores
                </span>
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3">
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

                <span className="text-xs uppercase font-bold">
                  Pequenos varejos
                </span>
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3">
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

                <span className="text-xs uppercase font-bold">
                  Prestadores de serviço
                </span>
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2 w-full">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3">
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

                <span className="text-xs uppercase font-bold">Recorrentes</span>
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3">
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

                <span className="text-xs uppercase font-bold">
                  Documentos fiscais
                </span>
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3">
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
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Certificado Digital
                </Text>
              </Link>
            </li>
            <li className="relative">
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
                <li className="text-sm py-3 mb-2">
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
                <li className="text-sm py-3 mb-2">
                  Programa de parceria para venda de Certificado Digital e
                  Sistemas Web de Gestão.
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Blog
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Suporte
                </Text>
              </Link>
            </li>
            <li>
              <Link href="/">
                <Text appearance="p4" color={neutralMid[600]}>
                  Contato
                </Text>
              </Link>
            </li>
            <li>
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
    </header>
  );
}
