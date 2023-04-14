'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Container from '../Container';
import { faCaretUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  const [navbarStatus, setNavbarStatus] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBarStyle);
  }, []);

  const toggleMenu = (e) => {
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

  return (
    <>
      <Head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section
        className={`fixed top-0 z-50 w-full ${navbarStatus && styles.active}`}
      >
        <Container newClasses="py-6">
          <div className="lg:col-span-2 flex justify-center items-center">
            <Link href="/">
              <Image
                alt="Sempre Tecnologia"
                height={43}
                quality={100}
                src={`${navbarStatus ? '/logo-smart.svg' : '/logo-sempre.svg'}`}
                width={162}
              />
            </Link>
          </div>
          <nav className="lg:col-span-8 flex justify-between items-center">
            <div className="relative">
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Quem Somos
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-white'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div className="absolute dropDown hidden">
                <FontAwesomeIcon
                  className="text-white ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Trabalhe Conosco
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
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
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Soluções
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-white'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div className="absolute dropDown hidden">
                <FontAwesomeIcon
                  className="text-white ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Sistemas Web para Gestão Empresarial
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Sistemas Web para Emissão de Nota Eletrônica
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Sistemas para Pequenos Varejos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Certificado Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Sistemas Web para Distribuidores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
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
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Segmentos
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-white'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div className="absolute dropDown hidden">
                <FontAwesomeIcon
                  className="text-white ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Distribuidores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Atacadistas
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Pequenos Varejos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Contabilidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Escolas e Faculdades
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Prestadores de Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Vendas Recorrentes
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Cobrança de Mensalidade
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
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
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
                onClick={toggleMenu}
              >
                Seja Parceiro
                <FontAwesomeIcon
                  className={`ml-2 ${
                    navbarStatus ? 'text-custom-orange' : 'text-white'
                  }`}
                  icon={faChevronDown}
                />
              </button>
              <div className="absolute dropDown hidden">
                <FontAwesomeIcon
                  className="text-white ml-6 h-8 w-8"
                  icon={faCaretUp}
                />
                <ul className="bg-white -mt-5 p-5 rounded-lg w-60">
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Contadores
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Certificado Digital
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block font-semibold text-xs text-navbar-gray py-1"
                      href="/"
                    >
                      Sistemas Web
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
              >
                Planos e Preços
              </button>
            </div>
            <div>
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
              >
                Unidades
              </button>
            </div>
            <div>
              <button
                className={`flex items-center font-sans text-sm ${
                  navbarStatus ? 'text-dark-blue' : 'text-white'
                }`}
                type="button"
              >
                Contato
              </button>
            </div>
          </nav>
          <div className="lg:col-span-2 flex justify-end">
            <button
              className={`${styles.gradientGreen} h-full w-3/4 font-bold text-sm text-white rounded`}
              type="button"
            >
              Fale agora
            </button>
          </div>
        </Container>
      </section>
    </>
  );
}
