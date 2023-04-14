import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';

export default function HeroPage({
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
          <Image
            alt="Solução"
            height={23}
            quality={100}
            src={iconSource}
            width={163}
          />
          <h1 className="font-serif font-semibold text-white text-6xl">
            {title}
          </h1>
        </div>
        <main className="col-span-6">
          <h2 className="font-serif text-white text-xl">{description}</h2>
        </main>
        <footer className="col-span-7">
          <button
            className={`${
              theme === 'blue' ? styles.gradientBlue : styles.gradientYellow
            } font-bold px-14 py-3 text-sm text-white rounded`}
            type="button"
          >
            Contrate Agora
          </button>
        </footer>
      </Container>
    </section>
  );
}
