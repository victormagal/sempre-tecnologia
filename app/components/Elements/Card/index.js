import Image from 'next/image';

export default function Card({ description, imageSource, title }) {
  return (
    <div className="bg-white col-span-4 drop-shadow px-8 py-20 rounded">
      <div className="bg-white drop-shadow-xl filter flex justify-center items-center h-20 rounded-full w-20">
        <Image
          alt="Sempre mensalidade"
          height={27}
          quality={100}
          src={imageSource}
          width={27}
        />
      </div>
      <h1 className="font-serif font-semibold my-6 text-dark-blue text-3xl">
        {title}
      </h1>
      <p className="text-soft-gray">{description}</p>
    </div>
  );
}
