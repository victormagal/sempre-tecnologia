import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container';

export default function Footer({ children }) {
  return (
    <>
      <Container newClasses="py-6">
        <div className="col-span-2 flex items-center">
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
        <div className="col-span-2 col-end-9">{children}</div>
        <div className="col-span-2 col-end-12">
          <Link className="flex items-center" href="/">
            <Image
              alt="Sempre Tecnologia"
              className=" align-middle"
              height={26}
              quality={100}
              src="/icon-call.svg"
              width={26}
            />
            <span className="font-serif font-semibold ml-3 text-dark-blue">
              Precisando de Ajuda? 0800 941 6260
            </span>
          </Link>
        </div>
      </Container>
    </>
  );
}
