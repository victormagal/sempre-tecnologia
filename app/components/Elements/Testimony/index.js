import Image from 'next/image';

export default function Testimony({ company, description, name }) {
  return (
    <div className="col-span-4 flex flex-col justify-between bg-white p-8 rounded">
      <p className="text-soft-gray">{description}</p>
      <div className="flex mt-8">
        <Image
          alt="Sempre mensalidade"
          height={37}
          quality={100}
          src="/icon-testimony.svg"
          width={39}
        />
        <div className="ml-8">
          <h1 className="font-serif font-bold text-dark-blue text-xl">
            {name}
          </h1>
          <h2 className="font-serif font-semibold text-soft-gray text-sm">
            {company}
          </h2>
        </div>
      </div>
    </div>
  );
}
