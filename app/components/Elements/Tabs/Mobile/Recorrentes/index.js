import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function RecorrentesMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex space-x-4">
          <li>
            <Image
              alt="Sempre Mensalidade"
              height={20}
              quality={100}
              src="/logos/tab-sempre-mensalidade.svg"
              width={163}
            />
          </li>
          <li>
            <Image
              alt="Sempre Condomínio"
              height={20}
              quality={100}
              src="/logos/tab-sempre-condominio.svg"
              width={156}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
          Cobranças recorrentes
        </Title>
        <ul className="flex flex-col space-y-2">
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Associações e Sindicatos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Clubes
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Cursos
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Condomínios
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Locações e Serviços
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Cobranças recorrentes
            </Text>
          </li>
        </ul>
      </div>
      <div className="col-span-4 flex justify-center">
        <Image
          alt="Sempre mensalidade"
          className="mt-16"
          height={410}
          width={486}
          quality={100}
          src="/home/recorrente-mobile.png"
        />
      </div>
    </>
  );
}
