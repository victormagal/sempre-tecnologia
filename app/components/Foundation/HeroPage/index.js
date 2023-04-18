import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HeroPage({
  cta,
  description,
  iconSource,
  theme,
  title,
  uri
}) {
  return (
    <section
      className={`${styles.container} relative flex flex-col justify-center`}
    >
      <div className="z-0">
        <Image
          alt="Background Image"
          className="object-cover object-center"
          fill
          quality={100}
          src={uri}
        />
      </div>
      <Container newClasses="relative z-10">
        <div className="col-span-7">
          {iconSource && <img src={iconSource} alt={title} />}
          <h1 className="font-serif font-semibold text-white text-6xl">
            {title}
          </h1>
        </div>
        {description && (
          <main className="col-span-6">
            <h2 className="font-serif text-white text-xl">{description}</h2>
          </main>
        )}
        <footer className="col-span-7">
          {cta === true ? (
            <button
              className={`${
                theme === 'blue' ? styles.gradientBlue : styles.gradientYellow
              } font-bold px-14 py-3 text-sm text-white rounded`}
              type="button"
            >
              Contrate Agora
            </button>
          ) : (
            <FontAwesomeIcon
              className="text-custom-orange"
              icon={faArrowDown}
            />
          )}
        </footer>
      </Container>
    </section>
  );
}
