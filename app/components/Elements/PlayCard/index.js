import Image from 'next/image';

export default function PlayCard({ bgImage }) {
  return (
    <div className="relative flex items-center justify-center h-80 lg:h-96">
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
