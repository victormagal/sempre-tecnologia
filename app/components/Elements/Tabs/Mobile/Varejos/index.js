import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function VarejosMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex space-x-4">
          <li>
            <Image
              alt="Sempre Gestor"
              height={16}
              quality={100}
              src="/logos/tab-sempre-gestor.png"
              width={104}
            />
          </li>
          <li>
            <Image
              alt="Sempre Lite"
              height={16}
              quality={100}
              src="/logos/tab-sempre-lite.png"
              width={93}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
          Pequenos Varejos
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Vestuários e calçados
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Barbearias e salões de beleza
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Petshops
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Lanchonetes e quiosques
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Móveis e colchões
            </Text>
          </li>
        </ul>
      </div>
      <div className="col-span-4 flex justify-end">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/distriibuidores-tab.png"
        />
      </div>
    </>
  );
}
