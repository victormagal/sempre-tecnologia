'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Container } from '../../Foundation';

export default function Testimony() {
  const [outsider, setOutsider] = useState();
  const distance = 450;

  useEffect(() => {
    setOutsider(document.getElementById('parentBox'));
  }, []);

  const goBack = () => {
    outsider.scrollBy({
      left: -distance,
      behavior: 'smooth'
    });
  };

  const goFoward = () => {
    outsider.scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  };

  return (
    <Container newClasses="py-24">
      <div className="col-span-12 grid grid-cols-12 gap-6">
        <h1 className="col-span-11 font-serif font-semibold mb-6 text-4xl text-dark-blue">
          Quem usa aprova
        </h1>
        <ul className="col-span-1 flex justify-between">
          <li>
            <button onClick={goBack} type="button">
              <Image
                alt="Voltar"
                height={47}
                quality={100}
                src="/icon-prev.svg"
                width={47}
              />
            </button>
          </li>
          <li>
            <button onClick={goFoward} type="button">
              <Image
                alt="Avançar"
                height={47}
                quality={100}
                src="/icon-next.svg"
                width={47}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-12">
        <div className="flex flex-col m-auto p-auto">
          <div
            id="parentBox"
            className={`flex overflow-x-scroll ${styles.hideScrollBar}`}
          >
            <div className="flex flex-nowrap space-x-6">
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 w-108 justify-between p-8 rounded">
                  <p className="text-soft-gray">
                    A Sempre Tecnologia conseguiu solucionar problemas que
                    tínhamos a bastante tempo. Além da interação entre as
                    empresas do grupo, personalizaram o sistema conforme
                    desejávamos. Hoje temos um sistema completo com toda as
                    áreas da empresa interligadas (dep. Comercial, produção,
                    financeiro, etc).
                  </p>
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
                        Pedro Henrique
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Proprietário da Finoplast
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 w-108 justify-between p-8 rounded">
                  <p className="text-soft-gray">
                    Estamos muito satisfeitos com a parceria da Sempre
                    Tecnologia na nossa empresa. A gestão empresarial ficou
                    muito mais simples e eficiente. Tivemos todo o suporte
                    necessário dos funcionários, o treinamento foi totalmente
                    presencial desde a alimentação do estoque até a emissão de
                    notas e cupons fiscais.
                  </p>
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
                        Dayane e Sérgio
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Gigante dos filtros
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    A Sempre Tecnologia tem um sistema moderno e eficaz! Os
                    técnicos estão sempre a nossa disposição. Estamos bem
                    cuidados com a Sempre Tecnologia, só tenho a agradecer!
                  </p>
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
                        Flávia Xavier
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Proprietária Comercial Xavier
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    Recentemente contratei o sistema da Sempre Tecnologia e
                    estou muito satisfeita. Atendimento e treinamento foram
                    excelentes. Parabéns a equipe pelo profissionalismo.
                  </p>
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
                        Tatiana Torquato
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Administradora Inova Papelaria & Cia.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    A Sempre Tecnologia é uma empresa séria que tem compromisso
                    com o cliente e busca solucionar todos os problemas com
                    rapidez e eficiência. Indico todos os clientes que conheço
                    para a Sempre pela facilidade em emitir nossas notas e
                    atenção que temos na venda e pós-venda.
                  </p>
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
                        Bruno Bladem Araújo
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Gerente da Academia Smartfit
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    Muito fácil e prático a emissão de notas fiscais. Além
                    disso, o atendimento do suporte é rápido e ajuda muito no
                    esclarecimento de dúvidas quanto às regras fiscais. Como
                    empreendedor iniciante, aprendi muito com a Sempre
                    Tecnologia.
                  </p>
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
                        Érika Gomes
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Proprietária Up Sports Treinamento Funcional
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    Olá pessoal! Meu nome é Mayara Polinário, sou consultora de
                    empresas, na área de controladoria e gostaria de agradecer a
                    parceria da Sempre Tecnologia, que sempre me atende e me
                    ajuda a prestar um ótimo serviço ao meu cliente final!
                  </p>
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
                        Mayara Polinário
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Consultora ALFA PARK
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    Fico muito feliz em ver um case de sucesso do Sebrae no DF,
                    gerando emprego, renda e ajudando a desenvolver o Distrito
                    Federal. Parabéns Sempre Tecnologia.
                  </p>
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
                        Antônio Valdir Oliveira
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Diretor Superintendente do Sebrae no DF
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    É muito legal você chegar numa empresa e encontrar as
                    pessoas com o sorriso no rosto, atendendo bem e sendo
                    solícitos para te ajudar e foi isso que encontrei na Sempre
                    Tecnologia
                  </p>
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
                        Toninho Pop
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Cliente da SEMPRE
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-block">
                <div className="bg-white flex flex-col h-80 justify-between p-8 rounded w-108">
                  <p className="text-soft-gray">
                    Somos parceiros da Sempre tecnologia há dois anos e estamos
                    muito satisfeitos com os serviços prestados. A equipe é bem
                    capacitada e preza pela excelência no atendimento ao
                    cliente. Organizada e eficiente nas demandas solicitadas.
                  </p>
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
                        Eduardo Corrêa
                      </h1>
                      <h2 className="font-serif font-semibold text-soft-gray text-sm">
                        Sócio - Corrêa & Chamon Assessoria Contábil
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
