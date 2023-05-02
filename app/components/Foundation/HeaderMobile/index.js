'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Container from '../Container';
import ModalForm from '../ModalForm';
import {
  faBars,
  faCaretUp,
  faChevronDown,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeaderMobile() {
  const [openModal, setOpenModal] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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
    <div className="block lg:hidden">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <section
        className="fixed top-0 z-50 w-full"
        style={{
          background: 'linear-gradient(265deg, #CF2932 0%, #77335F 100%)'
        }}
      >
        <Container newClasses="py-6">
          <div className="col-span-2 flex justify-center items-center">
            <Link href="/">
              <Image
                alt="Sempre Tecnologia"
                height={32}
                quality={100}
                src="/logo-sempre.svg"
                width={123}
              />
            </Link>
          </div>
          <button
            className="col-span-2 flex justify-end"
            type="button"
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? (
              <FontAwesomeIcon className="text-white h-10 w-10" icon={faBars} />
            ) : (
              <FontAwesomeIcon
                className="text-white h-10 w-10"
                icon={faXmark}
              />
            )}
          </button>
          {navOpen && (
            <nav className="col-span-4 flex flex-col space-y-10 py-10 items-center">
              <div className="relative">
                <button
                  className="flex items-center font-sans text-base text-white"
                  type="button"
                  onClick={toggleMenu}
                >
                  Quem Somos
                  <FontAwesomeIcon
                    className="ml-2 text-white"
                    icon={faChevronDown}
                  />
                </button>
                <div
                  className="absolute dropDown drop-shadow hidden z-60 translate-x-[-25%]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white ml-24 h-8 w-8"
                    icon={faCaretUp}
                  />
                  <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/noticias"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sobre"
                      >
                        Trabalhe Conosco
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sobre"
                      >
                        Nossa História
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <button
                  className="flex items-center font-sans text-base text-white"
                  type="button"
                  onClick={toggleMenu}
                >
                  Soluções
                  <FontAwesomeIcon
                    className="ml-2 text-white"
                    icon={faChevronDown}
                  />
                </button>
                <div
                  className="absolute dropDown drop-shadow hidden z-60 translate-x-[-25%]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white ml-24 h-8 w-8"
                    icon={faCaretUp}
                  />
                  <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sistemas-web-para-gestao-empresarial"
                      >
                        Sistemas Web para Gestão Empresarial
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sistemas-web-para-emissao-de-nota-eletronica"
                      >
                        Sistemas Web para Emissão de Nota Eletrônica
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/automacao-comercial"
                      >
                        Sistemas para Pequenos Varejos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="https://semprecertificadodigital.com.br"
                      >
                        Certificado Digital
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-distribuidor"
                      >
                        Sistemas Web para Distribuidores
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-mensalidade"
                      >
                        Sistemas Web para Gestão de Recorrência
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <button
                  className="flex items-center font-sans text-base text-white"
                  type="button"
                  onClick={toggleMenu}
                >
                  Segmentos
                  <FontAwesomeIcon
                    className="ml-2 text-white"
                    icon={faChevronDown}
                  />
                </button>
                <div
                  className="absolute dropDown drop-shadow hidden z-60 translate-x-[-25%]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white ml-24 h-8 w-8"
                    icon={faCaretUp}
                  />
                  <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-distribuidor"
                      >
                        Distribuidores
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-distribuidor"
                      >
                        Atacadistas
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/automacao-comercial"
                      >
                        Pequenos Varejos
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-mensalidade"
                      >
                        Contabilidade
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-mensalidade"
                      >
                        Escolas e Faculdades
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sistemas-web-para-gestao-empresarial"
                      >
                        Prestadores de Serviços
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-mensalidade"
                      >
                        Vendas Recorrentes
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sempre-mensalidade"
                      >
                        Cobrança de Mensalidade
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/sistemas-web-para-emissao-de-nota-eletronica"
                      >
                        MEI
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <button
                  className="flex items-center font-sans text-base text-white"
                  type="button"
                  onClick={toggleMenu}
                >
                  Seja Parceiro
                  <FontAwesomeIcon
                    className="ml-2 text-white"
                    icon={faChevronDown}
                  />
                </button>
                <div
                  className="absolute dropDown drop-shadow hidden z-60 translate-x-[-25%]"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <FontAwesomeIcon
                    className="text-white ml-24 h-8 w-8"
                    icon={faCaretUp}
                  />
                  <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/contador"
                      >
                        Contadores
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/parceria"
                      >
                        Certificado Digital
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="/parceria"
                      >
                        Sistemas Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block font-semibold text-base text-navbar-gray py-1"
                        href="https://scd.semprecertificadora.com.br/app_login/"
                        target="_blank"
                      >
                        Portal do Contador
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <Link href="https://loja.sempretecnologia.com.br">
                  <button
                    className="flex items-center font-sans text-base text-white"
                    type="button"
                  >
                    Planos e Preços
                  </button>
                </Link>
              </div>
              <div>
                <Link href="/contato">
                  <button
                    className="flex items-center font-sans text-base text-white"
                    type="button"
                  >
                    Contato
                  </button>
                </Link>
              </div>
              <div>
                <button
                  className={`${styles.gradientGreen} font-bold px-12 py-3 text-base text-white rounded`}
                  onClick={() => setOpenModal(true)}
                  type="button"
                >
                  Fale agora
                </button>
              </div>
            </nav>
          )}
        </Container>
      </section>
    </div>
  );
}
