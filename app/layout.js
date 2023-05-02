'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  Footer,
  Header,
  HeaderMobile,
  Locations,
  ModalForm
} from './components/Foundation';
import { client } from './graphql/config';
import { ApolloProvider } from '@apollo/client';
import './globals.css';

export default function RootLayout({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ApolloProvider client={client}>
          <ModalForm open={openModal} onClose={() => setOpenModal(false)} />
          <HeaderMobile />
          <Header />
          {children}
          <Locations />
          <Footer>
            <div
              className="cursor-pointer flex flex-col lg:flex-row items-center"
              onClick={() => setOpenModal(true)}
            >
              <Image
                alt="Sempre Tecnologia"
                height={26}
                quality={100}
                src="/icon-clock.svg"
                width={26}
              />
              <span className="font-serif font-semibold ml-3 mt-2 text-dark-blue text-center lg:text-left">
                Podemos ir até você, agende um horário.
              </span>
            </div>
          </Footer>
        </ApolloProvider>
      </body>
    </html>
  );
}
