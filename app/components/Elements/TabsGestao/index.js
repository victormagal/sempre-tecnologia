'use client';
import Image from 'next/image';
import { useState } from 'react';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowTrendUp,
  faBox,
  faCheck,
  faDollar
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TabsGestao() {
  const [toggle, setToggle] = useState(1);
  const [toggleGestor, setToggleGestor] = useState(1);
  const [toggleLite, setToggleLite] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const toggleGestorTab = (index) => {
    setToggleGestor(index);
  };

  const toggleLiteTab = (index) => {
    setToggleLite(index);
  };

  return (
    <>
      <div className="col-span-4 lg:col-span-3">
        <ul className="flex flex-col space-y-4">
          <li
            className={`${
              toggle === 1 ? 'bg-red-600' : 'bg-gray-200'
            } cursor-pointer drop-shadow p-6 rounded-xl`}
            onClick={() => toggleTab(1)}
          >
            <Image
              alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
              height={24}
              quality={100}
              src={`${
                toggle === 1
                  ? '/title-sempre-gestor-ativo.svg'
                  : '/title-sempre-gestor.svg'
              }`}
              width={159}
            />
            <p
              className={`${
                toggle === 1 ? 'block font-sans text-white mt-4' : 'hidden'
              }`}
            >
              Um sistema completo de gestão para sua empresa, onde você se
              organiza e assume o controle.
            </p>
          </li>
          <li
            className={`${
              toggle === 2 ? 'bg-red-600' : 'bg-gray-200'
            } cursor-pointer drop-shadow p-6 rounded-xl`}
            onClick={() => toggleTab(2)}
          >
            <Image
              alt="Sempre mensalidade - Sistemas web para gestão de recorrência"
              height={24}
              quality={100}
              src={`${
                toggle === 2
                  ? '/title-sempre-lite-ativo.svg'
                  : '/title-sempre-lite.svg'
              }`}
              width={159}
            />
            <p
              className={`${
                toggle === 2 ? 'block font-sans text-white mt-4' : 'hidden'
              }`}
            >
              Um sistema completo de gestão para sua empresa, onde você se
              organiza e assume o controle.
            </p>
          </li>
        </ul>
      </div>
      <div className="col-span-4 lg:col-span-8 lg:col-end-13 flex-grow">
        <div
          className={`${
            toggle === 1 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <ul className="border-b border-gray-300 flex justify-between mb-8 pb-6 px-6 w-full">
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleGestorTab(1)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleGestor === 1 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faUser}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleGestor === 1 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Indicado para
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleGestorTab(2)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleGestor === 2 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faArrowTrendUp}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleGestor === 2 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Faturamento
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleGestorTab(3)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleGestor === 3 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faDollar}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleGestor === 3 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Financeiro
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleGestorTab(4)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleGestor === 4 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faBox}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleGestor === 4 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Estoque
              </span>
            </li>
          </ul>
          <div className={`${toggleGestor === 1 ? 'block' : 'hidden'}`}>
            <p className="font-sans font-semibold text-soft-gray">
              Empresas que precisam de um sistema de gestão completo, com
              controle financeiro avançado, regras tributárias coplexas e com
              equipes enxutas.
            </p>
          </div>
          <div
            className={`${
              toggleGestor === 2 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Módulo de MD-e (manifestação do destinatário eletrônica) já
                  incluso.
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Permissão para visualizar as notas emitidas com cada CNPJ.
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Relatório de BI de faturamento com possibilidades de filtragem
                  por vendedor, área, rede, ramo, lucratividades
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Histórico de venda do cliente
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Emissão em lote de boleto, nota fiscal e pedidos de venda em
                  uma única tela
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Multinotas para empresas que possuem mais de um CNPJ
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${
              toggleGestor === 3 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  CRM últimas vendas, preços aplicados, mix de produtos,
                  situação financeira e follow-up.
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Gestão da comissão sobre vendas faturadas ou liquidadas
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Envio de alerta de cobrança de forma gratuita
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Controle de cheques emitidos, recebidos e repassados
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Gestão por centro de custo
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Emissão de fatura agrupada, sendo possível juntar todas as
                  vendas realizadas e cobrar em um só boleto e nota
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Conciliação bancária através da leitura de OFX
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Demonstrativo de receitas e despesas que permite comparação
                  entre períodos
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${
              toggleGestor === 4 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Gestão por local de estoque
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Possibilidade de restrição de horários para envio de pedidos
                  pelo smartphone ou bloqueio para acesso via web para evitar
                  quebra de carregamento e erros de estoque
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${
            toggle === 2 ? 'block' : 'hidden'
          } flex flex-col items-center`}
        >
          <ul className="border-b border-gray-300 flex justify-between mb-8 pb-6 px-6 w-full">
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleLiteTab(1)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleLite === 1 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faUser}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleLite === 1 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Indicado para
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleLiteTab(2)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleLite === 2 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faArrowTrendUp}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleLite === 2 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Faturamento
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleLiteTab(3)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleLite === 3 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faDollar}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleLite === 3 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Financeiro
              </span>
            </li>
            <li
              className="flex space-x-3 cursor-pointer items-center"
              onClick={() => toggleLiteTab(4)}
            >
              <FontAwesomeIcon
                className={`h-5 ${
                  toggleLite === 4 ? 'text-dark-blue' : 'text-gray-400'
                }`}
                icon={faBox}
              />
              <span
                className={`hidden lg:block font-sans font-bold ${
                  toggleLite === 4 ? 'text-dark-blue' : 'text-gray-400'
                } text-sm`}
              >
                Estoque
              </span>
            </li>
          </ul>
          <div className={`${toggleLite === 1 ? 'block' : 'hidden'}`}>
            <p className="font-sans font-semibold text-soft-gray">
              Clientes com equipe enxuta e que não precisem de um controle muito
              avançado, e que até então vinham gazendo a gestão manualmente, mas
              agora desejam sistematizar seu processo.
            </p>
          </div>
          <div
            className={`${
              toggleLite === 2 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Sistema com gestão de faturamento simplificado
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Dashboard comercial com os top 10 clientes, produtos, etc
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Multinotas para empresas que possuem mais de um CNPJ
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Exportação de arquivos para integração com a contabilidade
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Módulo de MD-e incluso, permitindo visualizar as notas
                  emitidas contra o seu CNPJ
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Inclusão de compras a partir do XML da nota fiscal
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Atende as mais complexas regras tributárias de forma
                  simplificada e automatizada para o usuário
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${
              toggleLite === 3 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Gestão de financeiro facilitada
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Gestão de comissão sobre vendas faturadas e liquidadas
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Controle de políticas comerciais, como não vender para
                  clientes sem limite ou com contas em atraso
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Conciliação bancária atrás da leitura de arquivo OFX
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  CRM com as últimas vendas, preços aplicados, mix de produtos,
                  situação financeira e follow-up
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Relatório de BI de faturamento com possibilidades de filtro
                  por vendedor, área, rede, ramo, lucratividade
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Envio de alertas e cobranças automáticas, tendo o controle de
                  entrega e leitura de e-mail e régua de cobrança personalizada
                </span>
              </li>
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Demonstrativo de receitas e despesas que permite comparação
                  entre períodos
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`${
              toggleLite === 4 ? 'block' : 'hidden'
            } flex space-x-6`}
          >
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Controle de estoque simples e fácil
                </span>
              </li>
            </ul>
            <ul className="flex flex-col space-y-4 w-1/2">
              <li className="flex space-x-2">
                <FontAwesomeIcon
                  className="h-4 text-red-600 pt-1"
                  icon={faCheck}
                />
                <span className="font-sans font-semibold text-soft-gray">
                  Treinamento e implantação assistidos para que o cliente faça o
                  melhor uso possível da ferramenta, controlando o estoque e
                  também todo o setor financeiro e de faturamento.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
