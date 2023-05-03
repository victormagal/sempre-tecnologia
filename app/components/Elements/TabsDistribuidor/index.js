'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TabsDistribuidor() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="col-span-4 lg:col-span-7 lg:col-end-13">
      <ul className="flex mb-4">
        <li
          className={`${
            toggle === 1
              ? 'border-b-2 border-white'
              : 'border-b border-gray-200'
          } flex flex-col md:flex-row items-center py-6 md:px-8 cursor-pointer`}
          onClick={() => toggleTab(1)}
        >
          <Image
            alt="App Sempre Distribuidor"
            height={52}
            quality={100}
            src="/icon-app-distribuidor.svg"
            width={54}
          />
          <span className="font-serif font-bold ml-4 text-white text-lg text-center">
            APP Sempre Distribuidor
          </span>
        </li>
        <li
          className={`${
            toggle === 2
              ? 'border-b-2 border-white'
              : 'border-b border-gray-200'
          } flex flex-col md:flex-row items-center py-6 md:px-10 cursor-pointer`}
          onClick={() => toggleTab(2)}
        >
          <Image
            alt="App Sempre Força de Vendas"
            height={52}
            quality={100}
            src="/icon-app-forca.svg"
            width={54}
          />
          <span className="font-serif font-bold ml-4 text-white text-lg text-center">
            APP Sempre Força de Vendas
          </span>
        </li>
      </ul>
      <div
        className={`${
          toggle === 1 ? 'block' : 'hidden'
        } flex flex-col space-y-6`}
      >
        <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
          O seu negócio, onde você estiver, na palma da sua mão.
        </h1>
        <p className="text-white text-center lg:text-left">
          Acesse o valor de vendas, saiba qual vendedor está vendendo mais, qual
          cliente está comprando mais e qual produto é o mais vendido.
        </p>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <Link
            href="https://play.google.com/store/apps/details?id=br.com.sempredistribuidor&hl=es_HN"
            target="_blank"
          >
            <Image
              alt="Google play"
              height={59}
              quality={100}
              src="/google-play.svg"
              width={203}
            />
          </Link>
          <Link
            href="https://apps.apple.com/br/app/sempre-distribuidor/id1489449251"
            target="_blank"
          >
            <Image
              alt="Apple story"
              height={59}
              quality={100}
              src="/apple-store.svg"
              width={203}
            />
          </Link>
        </div>
      </div>
      <div
        className={`${
          toggle === 2 ? 'block' : 'hidden'
        } flex flex-col space-y-6`}
      >
        <h1 className="font-serif font-semibold text-white text-4xl text-center lg:text-left">
          É mais praticidade em vendas externas.
        </h1>
        <p className="text-white text-center lg:text-left">
          Visualize o cadastro de produto e de cliente. Mais praticidade para os
          registros e anotações de venda no próprio aplicativo, que ainda poderá
          fazer a transmissão direto para a retaguarda web e adiantar processos,
          como o de faturamento.
        </p>
        <div className="flex space-x-4 justify-center lg:justify-start">
          <Link
            href="https://play.google.com/store/apps/details?id=br.com.sempreforcadevenda"
            target="_blank"
          >
            <Image
              alt="Google play"
              height={59}
              quality={100}
              src="/google-play.svg"
              width={203}
            />
          </Link>
          <Link
            href="https://apps.apple.com/br/app/sempre-força-de-venda/id1514410856"
            target="_blank"
          >
            <Image
              alt="Apple story"
              height={59}
              quality={100}
              src="/apple-store.svg"
              width={203}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
