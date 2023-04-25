import Image from 'next/image';
import { Card, Doubts, TabsGestao } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage
} from '../components/Foundation';
import { doubts } from './data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GestaoEmpresarial() {
  return (
    <main>
      <HeroPage
        arrow={false}
        cta={true}
        description="Para você e seu negócio."
        iconSource="/icon-gestao-empresarial.svg"
        title="Um Sistema de Gestão"
        uri="/bg-gestao-empresarial.jpg"
      />
      <Container newClasses="pt-24">
        <div className="border border-gray-200 col-span-5 col-start-2 flex items-start px-16 py-8 rounded space-x-8">
          <Image
            alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
            height={24}
            quality={100}
            src="/title-sempre-gestor.svg"
            width={159}
          />
          <div>
            <p className="font-sans text-soft-gray">
              Um sistema de gestão completo para sua empresa, onde você se
              organiza e assume o controle.
            </p>
            <button className="flex space-x-2 items-center mt-3" type="button">
              <span className="font-sans font-bold text-sm text-custom-orange">
                Quero saber mais
              </span>
              <FontAwesomeIcon
                className="h-3 text-custom-orange"
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
        <div className="border border-gray-200 col-span-5 flex items-start px-16 py-8 rounded space-x-8">
          <Image
            alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
            height={24}
            quality={100}
            src="/title-sempre-lite.svg"
            width={133}
          />
          <div>
            <p className="font-sans text-soft-gray">
              Para quem tem equipe enxuta e precisa de uma sistema para
              facilitar a vida...
            </p>
            <button className="flex space-x-2 items-center mt-3" type="button">
              <span className="font-sans font-bold text-sm text-custom-orange">
                Quero saber mais
              </span>
              <FontAwesomeIcon
                className="h-3 text-custom-orange"
                icon={faArrowRight}
              />
            </button>
          </div>
        </div>
      </Container>
      <Container newClasses="py-24">
        <div className="col-span-6">
          <Image
            alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
            height={562}
            quality={100}
            src="/ilustracao-gestao-empresarial.svg"
            width={758}
          />
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
            Descomplique a gestão da sua empresa.
          </h1>
          <p className="mt-6 text-soft-gray">
            Com o nosso sistema web para gestão empresarial, o controle da sua
            empresa fica em suas mãos. Desenvolvemos soluções simples que
            descomplicam a gestão de negócios e organizam melhor o seu
            funcionamento.
          </p>
        </div>
      </Container>
      <Container newClasses="pb-24">
        <h1 className="col-span-12 font-sans my-6 text-dark-blue text-3xl text-center">
          Um sistema de gestão empresarial{' '}
          <span className="font-bold">exclusivo</span> para cada cliente.
        </h1>
        <Card
          description="Centralize a administração em um só lugar, emita notas, controle o financeiro, gerencie o estoque e ganhe tempo para empreender."
          imageSource="/icon-gestao-1.svg"
          title="Ganhe Tempo"
        />
        <Card
          description="Fique tranquilo! Suas informações empresariais estão seguras em nossa plataforma."
          imageSource="/icon-gestao-2.svg"
          title="Informações Seguras"
        />
        <Card
          description="Mobilidade para que você faça a gestão empresarial do seu negócio de qualquer lugar, por meio de desktops ou plataformas móveis."
          imageSource="/icon-gestao-3.svg"
          title="Sistema Online"
        />
        <Card
          description="Com o Sistema Web para Gestão Empresarial, a troca de informações entre sua empresa e sua contabilidade vai ficar muito mais ágil."
          imageSource="/icon-gestao-4.svg"
          title="Integrado com seu Contador"
        />
        <Card
          description="Queremos caminhar junto com você para #Sempre. Nosso time de Sucesso do Cliente está preparado para tirar suas dúvidas com rapidez e eficiência. Conte conosco!"
          imageSource="/icon-gestao-5.svg"
          title="Sucesso do Cliente"
        />
        <Card
          description="Adotando o SempreGESTOR, você centraliza a gestão da sua empresa, automatiza tarefas e se livra das planilhas manuais."
          imageSource="/icon-gestao-6.svg"
          title="Chega de Planilhas"
        />
        <div className="col-span-12 flex justify-center mt-6">
          <button
            className="font-bold px-14 py-5 text-lg text-white rounded"
            style={{
              background: 'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
            }}
            type="button"
          >
            Agendar uma visita com nosso consultor!
          </button>
        </div>
      </Container>
      <BackgroundContainer uri="/banner-gestao-empresarial.jpg">
        <div className="col-span-5 col-end-13">
          <header className="flex items-center mb-6">
            <Image
              alt="App sempre gestor"
              height={52}
              quality={100}
              src="/icon-app-sempre-gestor.svg"
              width={54}
            />
            <span className="font-serif font-bold ml-4 text-white text-lg">
              APP Sempre Gestor
            </span>
          </header>
          <h1 className="font-serif font-semibold text-white text-4xl mb-6">
            O seu negócio, de onde você estiver, na palma da sua mão
          </h1>
          <p className="text-white mb-6">
            Acesse o valor de vendas, saiba qual vendedor está vendendo mais,
            qual cliente está comprando mais e qual produto é o mais vendido.
          </p>
          <footer className="flex">
            <Image
              alt="Google play"
              height={59}
              quality={100}
              src="/google-play.svg"
              width={203}
            />
            <Image
              alt="Apple story"
              className="ml-4"
              height={59}
              quality={100}
              src="/apple-store.svg"
              width={203}
            />
          </footer>
        </div>
      </BackgroundContainer>
      <Container newClasses="pt-24">
        <TabsGestao />
      </Container>
      <Doubts
        doubts={doubts}
        image="/cellphone-gestao.svg"
        theme="#DC272B"
        title="Tire suas dúvidas sobre Gestão empresarial"
      />
    </main>
  );
}
