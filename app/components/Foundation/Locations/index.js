'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import Container from '../Container';
import { cities, states } from './data';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Locations() {
  const [map, setMap] = useState('');
  const [stores, setStores] = useState([]);

  const getCities = (e) => {
    const {
      target: { value }
    } = e;

    const { counties } = cities.find((city) => city.state === value);
    setStores(counties);
  };

  const getMap = (e) => {
    const {
      target: { value }
    } = e;
    console.log(value);
    setMap(value);
  };

  return (
    <div className={styles.container}>
      <Container>
        <div className="col-span-12 flex justify-center">
          <Image
            alt="Sempre Tecnologia"
            height={17}
            quality={100}
            src="icon-logo-white.svg"
            width={41}
          />
          <h1 className="font-sans font-bold ml-4 text-white text-3xl">
            Escolha uma unidade perto de você! São + de 28 unidades para
            atendimento
          </h1>
        </div>
        <div className="col-span-3 col-start-4 flex items-center">
          <select
            className="bg-white appearance-none col-span-3 text-soft-gray rounded w-full p-3"
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
        <div className="col-span-3 flex items-center">
          <select
            className="bg-white appearance-none col-span-3 text-soft-gray rounded w-full p-3"
            onClick={getMap}
          >
            <option defaultValue="default">Filtrar por loja</option>
            {stores.map(({ id, map, name }) => (
              <option key={id} value={map}>
                {name}
              </option>
            ))}
          </select>
          <FontAwesomeIcon
            className="-ml-6 text-soft-gray"
            icon={faChevronDown}
          />
        </div>
        <div className="col-span-12">
          <iframe src={map} />
        </div>
      </Container>
    </div>
  );
}
