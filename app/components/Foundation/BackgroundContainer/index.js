import Image from 'next/image';
import styles from './styles.module.css';
import Container from '../Container';

export default function BackgroundContainer({ uri, children }) {
  return (
    <section
      className={`${styles.container} relative flex flex-col justify-center`}
    >
      <header className="z-0">
        <Image
          alt="Background image"
          className="object-cover object-center"
          fill
          quality={100}
          src={uri}
        />
      </header>
      <Container newClasses="relative z-10">{children}</Container>
    </section>
  );
}
