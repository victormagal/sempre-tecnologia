import Image from 'next/image';

export default function Card({ description, imageSource, title }) {
  return (
    <div className="col-span-4 bg-white p-8 rounded">
      <div className="bg-white drop-shadow-xl filter flex justify-center items-center h-20 rounded-full w-20">
        <Image
          alt="Sempre mensalidade"
          height={37}
          quality={100}
          src={imageSource}
          width={39}
        />
      </div>
      <h1 className="font-serif font-semibold my-6 text-dark-blue text-2xl">
        {title}
      </h1>
      <p className="text-soft-gray">{description}</p>
    </div>
  );
}
