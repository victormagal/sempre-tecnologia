import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function Varejos() {
  return (
    <>
      <div className="col-span-5 col-start-2 flex flex-col justify-center space-y-8">
        <ul className="flex items-center space-x-4">
          <li>
            <Image
              alt="Sempre Vest"
              height={20}
              quality={100}
              src="/logos/tab-sempre-vest.svg"
              width={123}
            />
          </li>
          <li>
            <Image
              alt="Sempre PDV Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-pdv-lite.svg"
              width={129}
            />
          </li>
          <li>
            <Image
              alt="Sempre PDV Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-pdv.svg"
              width={106}
            />
          </li>
        </ul>
        <Title appearance="h2" color={neutralDark[500]} extra>
          Gestão de produto
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Vestuário e Calçado
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Indústria
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Móveis e Colchões
            </Text>
          </li>
        </ul>
      </div>
      <div className="col-span-5 flex justify-end">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/home/pequenos-varejos-desktop.png"
        />
      </div>
    </>
  );
}
