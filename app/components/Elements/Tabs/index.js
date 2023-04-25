'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tabs() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <>
      <div className="col-span-5">
        <ul>
          <li
            className={`border-l-4 ${
              toggle === 1 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(1)}
          >
            <button
              className={`${
                toggle === 1 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Sistema Web para Gestão Comercial
            </button>
          </li>
          <li
            className={`border-l-4 ${
              toggle === 2 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(2)}
          >
            <button
              className={`${
                toggle === 2 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Sistema Web para Emissão de Nota Eletrônica
            </button>
          </li>
          <li
            className={`border-l-4 ${
              toggle === 3 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(3)}
          >
            <button
              className={`${
                toggle === 3 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Sistema para Pequenos Varejos
            </button>
          </li>
          <li
            className={`border-l-4 ${
              toggle === 4 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(4)}
          >
            <button
              className={`${
                toggle === 4 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Certificado Digital
            </button>
          </li>
          <li
            className={`border-l-4 ${
              toggle === 5 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(5)}
          >
            <button
              className={`${
                toggle === 5 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Sistemas Web para Distribuidores
            </button>
          </li>
          <li
            className={`border-l-4 ${
              toggle === 6 ? 'border-red-600' : 'border-soft-gray'
            } px-4 py-6 cursor-pointer`}
            onClick={() => toggleTab(6)}
          >
            <button
              className={`${
                toggle === 6 ? 'text-dark-blue' : 'text-soft-gray'
              } font-sans font-bold text-lg`}
              type="button"
            >
              Sistemas Web para Gestão de Recorrência
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-7 flex-grow">
        <div
          className={`${
            toggle === 1 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            De empresas que precisam de um sistema de gestão completo, empresas
            com pagamentos recorrentes, até empresas de pequeno porte que
            trabalham com equipes enxutas.
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/icon-service-01.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
        <div
          className={`${
            toggle === 2 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            Esta solução é indicada para clientes que desejam focar seu tempo
            encontrando estratégias comerciais, sem deixar de cumprir a
            obrigatoriedade da emissão de nota fiscal
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/icon-service-02.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
        <div
          className={`${
            toggle === 3 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            Essa solução é ideal para negócios que atendam majoritariamente
            pessoa física e que não necessitem de um sistema específico.
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/icon-service-04.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
        <div
          className={`${
            toggle === 4 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            Contadores e empreendedores que cuidem de empresas de qualquer
            porte, valorizam seu tempo e queiram emitir o certificado digital
            ICP-BRasil.
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/icon-service-05.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
        <div
          className={`${
            toggle === 5 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            Automatize tarefas e agilize processos internos da sua empresa com
            uma solução prática e fácil de usar. Simplificamos o controle da
            logística de transporte da sua distribuição.
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/icon-service-07.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
        <div
          className={`${
            toggle === 6 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <p className="font-sans font-semibold px-24 text-soft-gray text-center">
            O Sempre Mensalidade é um sistema de gestão e controle de
            recorrência. Essa solução é ideal para empresas que cobram
            mensalidade dos seus clientes.
          </p>
          <Image
            alt="Sempre mensalidade"
            className="mt-6"
            height={441}
            quality={100}
            src="/ilustra-sempre-mensalidade.svg"
            width={435}
          />
          <Link className="flex space-x-3 items-center" href="">
            <span className="font-sans font-bold text-sm text-red-600">
              Veja mais sobre essa solução
            </span>
            <FontAwesomeIcon className="h-3 text-red-600" icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </>
  );
}
