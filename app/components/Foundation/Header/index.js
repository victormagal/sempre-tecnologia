'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Container from '../Container';
import ModalForm from '../ModalForm';
import { faCaretUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBarStyle);
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

  const changeNavBarStyle = () => {
    const element = document.querySelector('nav');

    if (window.scrollY >= element.clientHeight) {
      setNavbarStatus(true);
    } else {
      setNavbarStatus(false);
    }
  };

  const closeDropdownItens = () => {
    const elements = [...document.getElementsByClassName('dropDown')];

    elements.map((element) => {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    });
  };

  const scrollTo = (element) => {
    document.getElementById(element).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <div className="hidden lg:block">
      <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
      <section
        className={`fixed top-0 z-50 w-full ${navbarStatus && styles.active}`}
      >
        <Container newClasses="py-6">
          <div className="col-span-2 flex justify-center items-center">
            <Link href="/">
              <Image
                alt="Sempre Tecnologia"
                height={46}
                quality={100}
                src={`${
                  navbarStatus ? '/logo-smart.svg' : '/logo-colored.svg'
                }`}
                width={172}
              />
            </Link>
          </div>
          <nav className="col-span-10 flex space-x-4 justify-between items-center">
            <div className="relative">
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-gray'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Quem Somos
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-gray'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <FontAwesomeIcon
                  className="text-gray ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/noticias"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sobre"
                    >
                      Trabalhe Conosco
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
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
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-gray'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Soluções
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-gray'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <FontAwesomeIcon
                  className="text-gray ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sistemas-web-para-gestao-empresarial"
                    >
                      Sistemas Web para Gestão Empresarial
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sistemas-web-para-emissao-de-nota-eletronica"
                    >
                      Sistemas Web para Emissão de Nota Eletrônica
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/automacao-comercial"
                    >
                      Sistemas para Pequenos Varejos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="https://semprecertificadodigital.com.br"
                    >
                      Certificado Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-distribuidor"
                    >
                      Sistemas Web para Distribuidores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
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
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-gray'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Segmentos
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-gray'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <FontAwesomeIcon
                  className="text-gray ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-distribuidor"
                    >
                      Distribuidores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-distribuidor"
                    >
                      Atacadistas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/automacao-comercial"
                    >
                      Pequenos Varejos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-mensalidade"
                    >
                      Contabilidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-mensalidade"
                    >
                      Escolas e Faculdades
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sistemas-web-para-gestao-empresarial"
                    >
                      Prestadores de Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-mensalidade"
                    >
                      Vendas Recorrentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/sempre-mensalidade"
                    >
                      Cobrança de Mensalidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
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
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-gray'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Seja Parceiro
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-gray'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div
                className="absolute dropDown drop-shadow hidden"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <FontAwesomeIcon
                  className="text-gray ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/contador"
                    >
                      Contadores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/parceria"
                    >
                      Certificado Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
                      href="/parceria"
                    >
                      Sistemas Web
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-sm text-navbar-gray py-1"
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
                  className={`flex items-center font-sans text-sm ${
                    navbarStatus ? 'text-dark-blue' : 'text-gray'
                  }`}
                  type="button"
                >
                  Planos e Preços
                </button>
              </Link>
            </div>
            <div>
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-gray'
                }`}
                onClick={() => scrollTo('mapLocations')}
                type="button"
              >
                Unidades
              </button>
            </div>
            <div>
              <Link href="/contato">
                <button
                  className={`flex items-center font-sans text-sm ${
                    navbarStatus ? 'text-dark-blue' : 'text-gray'
                  }`}
                  type="button"
                >
                  Contato
                </button>
              </Link>
            </div>
            <div>
              <button
                className={`${styles.gradientGreen} font-bold px-8 py-3 text-sm text-gray rounded`}
                onClick={() => setOpenModal(true)}
                type="button"
              >
                Fale agora
              </button>
            </div>
          </nav>
        </Container>
      </section>
    </div>
  );
}
