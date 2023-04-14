import Image from 'next/image';

export default function TransparentCard({ description, imageSource, title }) {
  return (
    <div className="col-span-4 px-8 py-20 rounded">
      <div className="flex justify-center items-center h-20 w-20">
        <Image
          alt="Sempre mensalidade"
          height={27}
          quality={100}
          src={imageSource}
          width={27}
        />
      </div>
      <h1 className="font-serif font-semibold my-6 text-dark-blue text-4xl">
        {title}
      </h1>
      <p className="text-soft-gray">{description}</p>
    </div>
  );
}
