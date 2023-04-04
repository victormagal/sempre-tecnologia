import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';
import { states } from './data';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Locations() {
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
            id="estados"
            className="bg-white appearance-none col-span-3 text-soft-gray rounded w-full p-3"
          >
            <option selected>Filtrar por estado</option>
            <option value="DF">Distrito Federal</option>
            <option value="GO">Goiás</option>
            <option value="TO">Tocantins</option>
          </select>
          <FontAwesomeIcon
            className="-ml-6 text-soft-gray"
            icon={faChevronDown}
          />
        </div>
        <div className="col-span-3 flex items-center">
          <select
            id="cidades"
            className="bg-white appearance-none col-span-3 text-soft-gray rounded w-full p-3"
          >
            <option defaultValue="">Filtrar por loja</option>
            {states.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
            {/* <option value="DF">Distrito Federal</option>
            <option value="GO">Goiás</option>
            <option value="TO">Tocantins</option> */}
          </select>
          <FontAwesomeIcon
            className="-ml-6 text-soft-gray"
            icon={faChevronDown}
          />
        </div>
      </Container>
    </div>
  );
}
