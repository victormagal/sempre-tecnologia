'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import { neutralDark, neutralMid, red } from '../../../base/Colors';
import { Overline, Text, Title } from '../../../base/Typography';
import Container from '../Container';
import { cities, states } from './data';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Locations() {
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
    const { phones, whatsapp: storeWhatsapp } = target.dataset;
    const phonesList = phones.replace(/\s/g, '').split(',');

    setPhones(phonesList);
    setWhatsapp(storeWhatsapp);
  };

  return (
    <div id="mapLocations" className={styles.container}>
      <Container newClasses="py-12 lg:py-24">
        <div className="col-span-6 col-start-4 text-center">
          <Overline appearance="o1" color={red[700]}>
            Unidades
          </Overline>
          <Title
            appearance="h2"
            className="my-4"
            color={neutralDark[500]}
            extra={true}
          >
            Temos uma unidade perto de você.
          </Title>
          <Text appearance="p1" color={neutralMid[500]}>
            São + de 25 unidades para atendimento.
          </Text>
        </div>
        <div className="col-span-4 lg:col-span-3 lg:col-start-4 flex items-center">
          <Text appearance="p4" color={neutralDark[500]}>
            Estado
          </Text>
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
          <Text appearance="p4" color={neutralDark[500]}>
            Unidade
          </Text>
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
          <div>
            <Image
              alt="Endereço - venha nos fazer uma visita"
              height={40}
              src="/pin-location.svg"
              width={40}
            />
            <Title appearance="h5">Endereço</Title>
            <Text appearance="p4">Venha nos fazer uma visita</Text>
            <Title appearance="h7" color={red[1000]}>
              Endereço aqui
            </Title>
          </div>
          <div>
            <Image
              alt="Telefone - nosso time está aqui para te ajudar"
              height={40}
              src="/pin-phone.svg"
              width={40}
            />
            <Title appearance="h5">Telefone</Title>
            <Text appearance="p4">Nosso time está aqui para te ajudar</Text>
            <ul>
              {phones.map((phone) => (
                <li key={phone}>
                  <Title appearance="h7" color={red[1000]}>
                    {phone}
                  </Title>
                </li>
              ))}
              <li>
                <Title appearance="h7" color={red[1000]}>
                  {whatsapp}
                </Title>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
