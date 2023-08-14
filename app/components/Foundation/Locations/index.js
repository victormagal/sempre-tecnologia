'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.css';
import Container from '../Container';
import { cities, states } from './data';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Locations() {
  const [location, setLocation] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9979162829613!2d-47.95219448514494!3d-15.804063889045247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a305ae8bbd095%3A0x764d8d62c96c9937!2sSempre%20Tecnologia%20e%20Certificado%20Digital!5e0!3m2!1spt-BR!2sbr!4v1639758498360!5m2!1spt-BR!2sbr'
  );
  const [phones, setPhones] = useState([
    '(61)3045-5090',
    '(61)99314-8813',
    '(61)99312-0192'
  ]);
  const [stores, setStores] = useState([]);
  const [whatsapp, setWhatsapp] = useState('(61)99252-2820');

  const getCities = (e) => {
    const {
      target: { value }
    } = e;

    const { counties } = cities.find((city) => city.state === value);
    setStores(counties);
  };

  const getDetails = (e) => {
    const {
      target: { value, children }
    } = e;

    const target = [...children].find(
      (element) => element.textContent === value
    );
    const {
      location: storeLocation,
      phones,
      whatsapp: storeWhatsapp
    } = target.dataset;
    const phonesList = phones.replace(/\s/g, '').split(',');

    setLocation(storeLocation);
    setPhones(phonesList);
    setWhatsapp(storeWhatsapp);
  };

  return (
    <div id="mapLocations" className={styles.container}>
      <Container newClasses="py-12 lg:py-24">
        <div className="col-span-4 lg:col-span-12 flex flex-col lg:flex-row items-center justify-center lg:mb-12">
          <Image
            alt="Sempre Tecnologia"
            className="mb-6 lg:mb-0"
            height={17}
            quality={100}
            src="/icon-logo-white.svg"
            width={41}
          />
          <h1 className="font-sans font-bold lg:ml-4 text-white text-xl lg:text-3xl text-center lg:text-left">
            Escolha uma unidade perto de você! São + de 25 unidades para
            atendimento
          </h1>
        </div>
        <div className="col-span-4 lg:col-span-3 lg:col-start-4 flex items-center">
          <select
            className="bg-white appearance-none text-soft-gray rounded w-full p-3"
            onClick={getCities}
          >
            <option defaultValue="default">Filtrar por estado</option>
            {states.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            className="-ml-6 text-soft-gray"
            icon={faChevronDown}
          />
        </div>
        <div className="col-span-4 lg:col-span-3 flex items-center">
          <select
            className="bg-white appearance-none text-soft-gray rounded w-full p-3"
            onChange={getDetails}
          >
            <option defaultValue="default">Filtrar por loja</option>
            {stores.map(({ id, map, name, phones, whatsapp }) => (
              <option
                data-location={map}
                data-phones={phones}
                data-whatsapp={whatsapp}
                key={id}
                value={name}
              >
                {name}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            className="-ml-6 text-soft-gray"
            icon={faChevronDown}
          />
        </div>
        <div className="border-4 border-white col-span-4 lg:col-span-12 my-6 relative rounded">
          <iframe className={`${styles.iframe} w-full`} src={location} />
          <div className="absolute bg-white px-6 py-4 right-3 rounded shadow-lg space-y-2 top-3">
            <header>
              <p className="font-serif text-soft-gray text-lg">Fale conosco:</p>
            </header>
            <footer className="space-y-2">
              <div className="flex space-x-4">
                <Image
                  alt="Telefone fixo"
                  height={19}
                  quality={100}
                  src="/icon-call.svg"
                  width={19}
                />
                <ul>
                  {phones.map((phone) => (
                    <li
                      className="font-serif font-semibold text-custom-black text-lg"
                      key={phone}
                    >
                      {phone}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <Image
                  alt="Telefone celular e whatsapp"
                  height={19}
                  quality={100}
                  src="/icon-whats.svg"
                  width={19}
                />
                <ul>
                  <li className="font-serif font-semibold text-custom-black text-lg">
                    {whatsapp}
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-12 flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://www.facebook.com/sempretecnologia/"
                target="_blank"
                title="Facebook"
              >
                <FontAwesomeIcon
                  className="h-6 text-white"
                  icon={faFacebookF}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/sempre-tecnologia/"
                target="_blank"
                title="LinkedIn"
              >
                <FontAwesomeIcon
                  className="h-6 text-white"
                  icon={faLinkedinIn}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/sempretecnologia/"
                target="_blank"
                title="Instagram"
              >
                <FontAwesomeIcon
                  className="h-6 text-white"
                  icon={faInstagram}
                />
              </Link>
            </li>
          </ul>
          <Image
            alt="Great Place To Work - Certificado"
            height={86}
            quality={100}
            src="/gpw.png"
            width={53}
          />
        </div>
      </Container>
    </div>
  );
}
