'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function TabsDistribuidor() {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="col-span-5 col-end-13">
      <ul className="flex mb-10">
        <li
          className={`${
            toggle === 1
              ? 'border-b-2 border-white'
              : 'border-b border-gray-200'
          } flex items-center p-6 cursor-pointer`}
          onClick={() => toggleTab(1)}
        >
          <Image
            alt="App Sempre Distribuidor"
            height={52}
            quality={100}
            src="/icon-app-distribuidor.svg"
            width={54}
          />
          <span className="font-serif font-bold ml-4 text-white text-lg">
            APP Sempre Distribuidor
          </span>
        </li>
        <li
          className={`${
            toggle === 2
              ? 'border-b-2 border-white'
              : 'border-b border-gray-200'
          } flex items-center p-6 cursor-pointer`}
          onClick={() => toggleTab(2)}
        >
          <Image
            alt="App Sempre Força de Vendas"
            height={52}
            quality={100}
            src="/icon-app-forca.svg"
            width={54}
          />
          <span className="font-serif font-bold ml-4 text-white text-lg">
            APP Sempre Força de Vendas
          </span>
        </li>
      </ul>
      <div className={`${toggle === 1 ? 'block' : 'hidden'}`}>
        <h1 className="font-serif font-semibold text-white text-4xl mb-6">
          O seu negócio, onde você estiver, na palma da sua mão.
        </h1>
        <p className="text-white mb-6">
          Acesse o valor de vendas, saiba qual vendedor está vendendo mais, qual
          cliente está comprando mais e qual produto é o mais vendido.
        </p>
        <div className="flex">
          <Image
            alt="Google play"
            height={59}
            quality={100}
            src="/google-play.svg"
            width={203}
          />
          <Image
            alt="Apple story"
            className="ml-4"
            height={59}
            quality={100}
            src="/apple-store.svg"
            width={203}
          />
        </div>
      </div>
      <div className={`${toggle === 2 ? 'block' : 'hidden'}`}>
        <h1 className="font-serif font-semibold text-white text-4xl mb-6">
          É mais praticidade em vendas externas.
        </h1>
        <p className="text-white mb-6">
          Visualize o cadastro de produto e de cliente. Mais praticidade para os
          registros e anotações de venda no próprio aplicativo, que ainda poderá
          fazer a transmissão direto para a retaguarda web e adiantar processos,
          como o de faturamento.
        </p>
        <div className="flex">
          <Image
            alt="Google play"
            height={59}
            quality={100}
            src="/google-play.svg"
            width={203}
          />
          <Image
            alt="Apple story"
            className="ml-4"
            height={59}
            quality={100}
            src="/apple-store.svg"
            width={203}
          />
        </div>
      </div>
    </div>
  );
}
