'use client';
import Image from 'next/image';
import styles from './styles.module.css';
import { Container } from '../../Foundation';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Doubts({ doubts, image, theme, title }) {
  const changeTitleColor = (e) => {
    const element = [...e.currentTarget.getElementsByTagName('h2')];

    if (e.currentTarget.parentNode.hasAttribute('open')) {
      element[0].setAttribute('style', 'color: #70738A;');
    } else {
      element[0].setAttribute('style', `color: ${theme};`);
    }
  };

  return (
    <Container newClasses="py-24">
      <div className="col-span-5">
        <Image
          alt="Apple story"
          className="ml-4"
          height={748}
          quality={100}
          src={image}
          width={635}
        />
      </div>
      <div className="col-span-7">
        <h1 className="font-serif font-semibold mb-12 pr-48 text-5xl text-dark-blue">
          {title}
        </h1>
        <div>
          {doubts.map(({ question, answer }) => (
            <details
              key={question}
              className="border border-gray-300 mb-6 p-6 rounded"
            >
              <summary
                className={`cursor-pointer flex items-center justify-between ${styles.noMarker}`}
                onClick={changeTitleColor}
              >
                <h2 className="font-serif mr-10 text-soft-gray text-xl">
                  {question}
                </h2>
                <FontAwesomeIcon
                  className="h-5 w-5"
                  icon={faChevronDown}
                  style={{ color: `${theme}` }}
                />
              </summary>
              <p className="font-sans mt-6 text-soft-gray">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Container>
  );
}
