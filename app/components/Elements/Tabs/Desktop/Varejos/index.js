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
              alt="Sempre Gestor"
              height={20}
              quality={100}
              src="/logos/tab-sempre-gestor.svg"
              width={126}
            />
          </li>
          <li>
            <Image
              alt="Sempre Lite"
              height={20}
              quality={100}
              src="/logos/tab-sempre-lite.svg"
              width={113}
            />
          </li>
          <li>
            <Image
              alt="Sempre BPO"
              height={28}
              quality={100}
              src="/logos/tab-sempre-bpo-red.svg"
              width={104}
            />
          </li>
          <li>
            <Image
              alt="Sempre Vest"
              height={20}
              quality={100}
              src="/logos/tab-sempre-vest-red.svg"
              width={120}
            />
          </li>
        </ul>
        <Title appearance="h2" color={neutralDark[500]} extra>
          Gestão de produtos
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
