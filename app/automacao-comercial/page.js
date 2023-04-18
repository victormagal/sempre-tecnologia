import Image from 'next/image';
import { Card, ColoredCard, Doubts, Testimony } from '../components/Elements';
import {
  BackgroundContainer,
  Container,
  HeroPage
} from '../components/Foundation';
import { doubts } from './data';

export default function AutomacaoComercial() {
  return (
    <main>
      <HeroPage
        cta={true}
        description="Para ajudar a organizar sua empresa"
        iconSource="/icon-automacao-comercial.svg"
        title="Soluções práticas"
        uri="/bg-automacao-comercial.jpg"
      />
      <Container newClasses="py-24">
        <div className="col-span-6">
          <Image
            alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
            height={562}
            quality={100}
            src="/ilustracao-automacao-comercial.svg"
            width={758}
          />
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <Image
            alt="Sempre emissor de notas"
            height={20}
            quality={100}
            src="/title-automacao-comercial.svg"
            width={159}
          />
          <h1 className="font-serif font-bold mt-6 text-dark-blue text-4xl">
            A automação pode ser o diferencial que sua empresa precisa
          </h1>
          <p className="mt-6 text-soft-gray">
            Um sistema para o seu pequeno varejo para cadastrar clientes,
            fornecedores e produtos, além de conseguir emitir cupons
            eletrônicos, notas fiscais, controlar estoque, fluxo de caixa e
            muito mais, tudo de maneira simples para facilitar o funcionamento e
            gestão de sua empresa.
          </p>
        </div>
      </Container>
      <Container newClasses="pb-24">
        <h1 className="col-span-12 font-sans my-6 text-dark-blue text-3xl text-center">
          <span className="font-bold">Funcionalidades exclusivas</span> que são
          ideais para o seu negócio:
        </h1>
        <Card
          description="O consumo de internet é mínimo pois só faz uso de internet no momento de emitir o NFC-e, dessa forma é uma boa solução para quiosques que usam internet móvel."
          imageSource="/icon-automacao-1.svg"
          title="Independência"
        />
        <Card
          description="Solução web para empresas prestadoras de serviços que precisam emitir notas eletrônicas com Imposto Sobre Serviço (ISS)."
          imageSource="/icon-automacao-2.svg"
          title="Baixo consumo de dados"
        />
        <Card
          description="Transmissão integrada com o sistema web, possibilitando acompanhar as vendas de qualquer lugar, sem a necessidade de configurações adicionais."
          imageSource="/icon-automacao-3.svg"
          title="Integração"
        />
        <Card
          description="Com o controle de caixa da nossa solução de automação comercial, é possível fazer o controle de caixa para conferência de dinheiro e tickets de cartão."
          imageSource="/icon-automacao-4.svg"
          title="Controle de caixa"
        />
        <Card
          description="Permite que lojas em localidades distintas compartilhem o mesmo 'banco de dados', facilitando a gestão do estoque e financeiro."
          imageSource="/icon-automacao-5.svg"
          title="Conexão"
        />
        <ColoredCard
          description="Automatize tarefas e garanta vantagens para seu negócio."
          firstColor="#1C6B8F"
          secondColor="#1B9096"
          title="Praticidade que agiliza processos"
        />
      </Container>
      <BackgroundContainer uri="/bg-automacao.svg">
        <div className="col-span-6 flex justify-center items-center">
          <Image
            alt="Sempre PDV"
            height={480}
            quality={100}
            src="/ilustracao-automacao-comercial-2.svg"
            width={693}
          />
        </div>
        <div className="col-span-5 flex flex-col justify-center">
          <Image
            alt="Sempre PDV"
            height={20}
            quality={100}
            src="/logo-pdv.svg"
            width={111}
          />
          <h1 className="font-serif font-semibold text-white text-4xl mb-6">
            Sistema para Pequenos Varejos
          </h1>
          <p className="text-white mb-6">
            Adeque sua empresa às exigências da legislação vigente. O SemprePDV
            é de fácil utilização, cadastra clientes e produtos, emite cupons
            eletrônicos, gera relatórios de faturamento, vendas diárias e
            totais.
          </p>
          <button
            className="font-bold px-14 py-3 text-sm text-white rounded w-2/5"
            style={{
              background: 'linear-gradient(190deg, #F8B44C 14%, #F07E26 89%)'
            }}
            type="button"
          >
            Contrate Agora
          </button>
        </div>
      </BackgroundContainer>
      <Testimony />
      <BackgroundContainer uri="/bg-automacao-comercial-2.jpg">
        <div className="col-span-5 col-end-13">
          <header className="flex items-center mb-6">
            <Image
              alt="App sempre mensalidade"
              height={52}
              quality={100}
              src="/icon-app-automacao.svg"
              width={54}
            />
            <span className="font-serif font-bold ml-4 text-white text-lg">
              APP Sempre Comanda Eletrônica
            </span>
          </header>
          <h1 className="font-serif font-semibold text-white text-4xl mb-6">
            Simples, prático e moderno.
          </h1>
          <p className="text-white mb-6">
            Anote o pedido, faça o controle de consumo e, ao final, a conta
            estará toda lançada no caixa.
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
      <Doubts
        doubts={doubts}
        image="/cellphone-green.svg"
        theme="#35B6B4"
        title="Tire suas dúvidas sobre Sistemas para Pequeno Varejo"
      />
    </main>
  );
}
