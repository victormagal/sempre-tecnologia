import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';

export default function Footer({ children }) {
  return (
    <>
      <Container newClasses="py-12">
        <div className="col-span-4 flex justify-center items-center">
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={36}
              quality={100}
              src="/logo-vermelha.svg"
              width={135}
            />
          </Link>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:col-end-13 flex">
          <div className="w-1/2">{children}</div>
          <div className="w-1/2">
            <div className="flex flex-col lg:flex-row items-center">
              <Image
                alt="Sempre Tecnologia"
                className=" align-middle"
                height={26}
                quality={100}
                src="/icon-call.svg"
                width={26}
              />
              <span className="font-serif font-semibold ml-3 mt-2 text-dark-blue text-center lg:text-left">
                Precisando de Ajuda? 0800 941 6260
              </span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
