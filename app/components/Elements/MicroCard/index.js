import Image from 'next/image';

export default function MicroCard({ description, imageSource, title }) {
  return (
    <div className="bg-white col-span-4 drop-shadow p-8 rounded">
      <Image
        alt="Sempre mensalidade"
        height={27}
        quality={100}
        src={imageSource}
        width={27}
      />
      <h1 className="font-serif font-bold my-6 text-dark-blue text-xl">
        {title}
      </h1>
      <p className="font-sans text-soft-gray">{description}</p>
    </div>
  );
}
