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
          <ul className="flex items-center justify-between w-full">
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
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>Distribuidores</span>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/pescados.svg"
                    width={27}
                  />
                  Pescados, bovinos e suínos
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/paes.svg"
                    width={27}
                  />
                  Pães e salgados
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/hortifruti.svg"
                    width={27}
                  />
                  Hortifruti
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/cosmeticos.svg"
                    width={27}
                  />
                  Comésticos
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/picoles.svg"
                    width={27}
                  />
                  Picolés e sorvetes
                </li>

                <span>Pequenos varejos</span>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/vestuarios.svg"
                    width={27}
                  />
                  Vestuários e calçados
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/barbearias.svg"
                    width={27}
                  />
                  Barbearias e salões de beleza
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/petshops.svg"
                    width={27}
                  />
                  Petshops
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/lanchonetes.svg"
                    width={27}
                  />
                  Lanchonetes e quiosques
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/moveis.svg"
                    width={27}
                  />
                  Móveis e colchões
                </li>

                <span>Prestadores de serviço</span>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/contabilidades.svg"
                    width={27}
                  />
                  Contabilidades e BPO
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/construtoras.svg"
                    width={27}
                  />
                  Construtoras e Engenharias
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/consultorios.svg"
                    width={27}
                  />
                  Consultórios
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/seguranca.svg"
                    width={27}
                  />
                  Segurança, limpeza e conservação
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/manutencao.svg"
                    width={27}
                  />
                  Manutenção e instalações
                </li>

                <span>Recorrentes</span>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/associacoes.svg"
                    width={27}
                  />
                  Associações e sindicatos
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/clubes.svg"
                    width={27}
                  />
                  Clubes
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/cursos.svg"
                    width={27}
                  />
                  Cursos
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/condominios.svg"
                    width={27}
                  />
                  Condomínios
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/locacoes.svg"
                    width={27}
                  />
                  Locações e serviços
                </li>

                <span>Documentos fiscais</span>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/nfprodutos.svg"
                    width={27}
                  />
                  NF-e Nota Fiscal Produtos
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/nfservicos.svg"
                    width={27}
                  />
                  NF-e Nota Fiscal Serviços
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/conhecimento.svg"
                    width={27}
                  />
                  CT-e Conhecimento de transporte
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/manifesto.svg"
                    width={27}
                  />
                  MDF-e Manifesto destinatário
                </li>
                <li>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/nfconsumidor.svg"
                    width={27}
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
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/parceiro.svg"
                    width={27}
                  />
                  Programa de parceria para Contadores
                </span>
                <li>Conheça e aproveite benefícios exclusivos.</li>

                <span>
                  <Image
                    alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
                    height={24}
                    quality={100}
                    src="/menu-icons/parceiro.svg"
                    width={27}
                  />
                  Seja um parceiro certificador
                </span>
                <li>
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
