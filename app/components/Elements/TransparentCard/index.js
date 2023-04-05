import Image from 'next/image';

export default function TransparentCard({ description, imageSource, title }) {
  return (
    <div className="col-span-4 px-8 py-20 rounded">
      <Image
        alt="Sempre mensalidade"
        height={37}
        quality={100}
        src={imageSource}
        width={39}
      />
      <h1 className="font-serif font-semibold my-6 text-dark-blue text-4xl">
        {title}
      </h1>
      <p className="text-soft-gray">{description}</p>
    </div>
  );
}
