import Image from 'next/image';
import { neutralMid, neutralDark } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';

export default function PrestadoresMobile() {
  return (
    <>
      <div className="col-span-4 flex flex-col justify-center space-y-8">
        <ul className="flex space-x-4">
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
              height={20}
              quality={100}
              src="/logos/tab-sempre-bpo.svg"
              width={104}
            />
          </li>
        </ul>
        <Title appearance="h4" color={neutralDark[500]} extra>
          Gestão de serviços
        </Title>
        <ul className="flex flex-col space-y-2">
          {/* <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Contabilidade
            </Text>
          </li> */}
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              BPO
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Construtoras e Engenharias
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Segurança, Limpeza e Conservação
            </Text>
          </li>
          <li>
            <Text appearance="p3" color={neutralMid[500]}>
              Manutenção e Instalações
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
          src="/home/gestor-mobile.png"
        />
      </div>
    </>
  );
}
