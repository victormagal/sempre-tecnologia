import Image from 'next/image';
import styles from './styles.module.css';

export default function PlayCard({ bgImage }) {
  return (
    <div className={styles.box}>
      <Image
        alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
        className="absolute"
        height={382}
        quality={100}
        src={bgImage}
        width={570}
      />
      <Image
        alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
        className="absolute cursor-pointer"
        height={75}
        quality={100}
        src="/icon-player.svg"
        width={75}
      />
    </div>
  );
}
