import Link from 'next/link';
import { useState } from 'react';
import {
  blue,
  neutralDark,
  neutralLight,
  neutralMid,
  red
} from '@/app/base/Colors';
import RegularIcon from '@/app/base/RegularIcon';
import SolidIcon from '@/app/base/SolidIcon';
import { Overline, Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Foundation';
import { getAllBranches, getAllStates } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import { Field, useFormikContext } from 'formik';

export default function PaymentData() {
  const { errors, setFieldValue, values } = useFormikContext();
  const [filteredStories, setFilteredStories] = useState([]);
  const [states, setStates] = useState([]);
  const [stories, setStories] = useState([]);

  useQuery(getAllStates, {
    onCompleted: ({ estados: { data } }) => {
      data.map(({ attributes: { label, uf } }) => {
        const node = {
          estado: label,
          uf: uf
        };
        setStates((prevState) => [...prevState, node]);
      });
    }
  });
  useQuery(getAllBranches, {
    onCompleted: ({ filiais: { data } }) => {
      data.map(
        ({
          attributes: {
            label,
            telefones,
            endereco,
            mapa,
            estado: {
              data: {
                attributes: { label: labelState, uf }
              }
            }
          }
        }) => {
          const node = {
            endereco: endereco,
            estado: labelState,
            cidade: label,
            mapa: mapa,
            telefones: telefones,
            uf: uf
          };
          setStories((prevState) => [...prevState, node]);
        }
      );
    }
  });

  const filterStories = (value) => {
    const selectedStories = [];
    stories.map((story) => {
      if (story.uf === value) {
        selectedStories.push(story);
      }
    });
    setFilteredStories(selectedStories);
  };

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Formas de pagamento
        </Title>
        {errors.forma_pagamento && (
          <div
            className="flex justify-center p-4 rounded w-full"
            style={{ background: red[100] }}
          >
            <Field
              className="hidden"
              name="tipo_atendimento"
              type="hidden"
              value={values.tipo_atendimento}
            />
            <Text appearance="p4" color={red[1200]}>
              Preencha todos os campos corretamente
            </Text>
          </div>
        )}
        <div className="flex space-x-16 w-full">
          <ul className="flex flex-col space-y-4 w-2/5" role="group">
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => setFieldValue('forma_pagamento', 'cartao')}
              style={{
                borderColor:
                  values.forma_pagamento === 'cartao'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faCirclePlay"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Cartão de crédito
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'cartao'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'cartao'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => {
                setFieldValue('forma_pagamento', 'boleto');
              }}
              style={{
                borderColor:
                  values.forma_pagamento === 'boleto'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faUser"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Boleto
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'boleto'
                    ? 'faCircleDot'
                    : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'boleto'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex items-center justify-between space-x-6 p-6 rounded"
              onClick={() => setFieldValue('forma_pagamento', 'pix')}
              style={{
                borderColor:
                  values.forma_pagamento === 'pix'
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div className="flex items-center space-x-6">
                <div
                  className="h-10 flex items-center justify-center rounded-full w-10"
                  style={{ background: red[100] }}
                >
                  <RegularIcon
                    icon="faUser"
                    iconColor={red[900]}
                    newClasses="h-4"
                  />
                </div>
                <Title appearance="h6" color={neutralDark[500]}>
                  Pix
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  values.forma_pagamento === 'pix' ? 'faCircleDot' : 'faCircle'
                }`}
                iconColor={
                  values.forma_pagamento === 'pix'
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
          </ul>
          <div className="w-3/5">
            {values.forma_pagamento === 'cartao' && (
              <>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Número do cartão
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="card_number"
                      type="text"
                      value={values.card_number}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.card_number && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.card_number}
                      </span>
                    )}
                  </li>
                </ul>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Nome no cartão
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="card_name"
                      type="text"
                      value={values.card_name}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.card_name && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.card_name}
                      </span>
                    )}
                  </li>
                </ul>
                <ul className="flex flex-wrap mb-6 space-x-8">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Data de validade
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="card_expiration_date"
                      type="text"
                      value={values.card_expiration_date}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.card_expiration_date && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.card_expiration_date}
                      </span>
                    )}
                  </li>
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      CVC
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="card_code"
                      type="text"
                      value={values.card_code}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.card_code && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.card_code}
                      </span>
                    )}
                  </li>
                </ul>
                <ul className="flex mb-6">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Em quantas parcelas deseja pagar?
                    </Text>
                    <Field
                      as="select"
                      className="appearance-none border p-3 rounded text-sm w-full"
                      onChange={(e) =>
                        setFieldValue('parcelas', e.target.value)
                      }
                      style={{
                        background: neutralLight[200],
                        borderColor: neutralLight[400],
                        color: neutralMid[500]
                      }}
                      value={values.parcelas}
                    >
                      <option defaultValue="default">Selecione</option>
                      <option key="1">1x de R$ 179.90</option>
                      <option key="2">2x de R$ 179.90</option>
                      <option key="3">3x de R$ 179.90</option>
                    </Field>
                    <SolidIcon
                      icon="faChevronDown"
                      iconColor={neutralMid[500]}
                      newClasses="h-4 -ml-10"
                    />
                  </li>
                </ul>
              </>
            )}
            {(values.forma_pagamento === 'boleto' ||
              values.forma_pagamento === 'pix') && (
              <>
                <ul className="border-b flex flex-col mb-6 pb-6 space-y-2">
                  <li>
                    <Title appearance="h4" color={neutralDark[500]}>
                      Dados da compra
                    </Title>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h6" color={neutralMid[500]}>
                      Subtotal
                    </Title>
                    <Title appearance="h6" color={neutralDark[500]}>
                      R$ 242,00
                    </Title>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h6" color={neutralMid[500]}>
                      Desconto
                    </Title>
                    <div className="flex items-center space-x-4">
                      <div
                        className="py-2 rounded text-center"
                        style={{ background: '#E6F8F2' }}
                      >
                        <Overline
                          appearance="o1"
                          className="px-4"
                          color="#076E4F"
                        >
                          25% off
                        </Overline>
                      </div>
                      <Title appearance="h6" color={neutralDark[500]}>
                        R$ 62,10
                      </Title>
                    </div>
                  </li>
                  <li className="flex justify-between">
                    <Title appearance="h5" color={neutralDark[500]}>
                      Total
                    </Title>
                    <Title appearance="h5" color={neutralDark[500]}>
                      R$ 179,90
                    </Title>
                  </li>
                </ul>
                {values.forma_pagamento === 'boleto' && (
                  <>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          CEP
                        </Text>
                        <Field
                          className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                          name="cep"
                          type="text"
                          value={values.cep}
                          style={{
                            background: neutralLight[200],
                            border: `1px solid ${neutralLight[400]}`,
                            color: neutralMid[500]
                          }}
                        />
                        {errors.cep && (
                          <span className="ml-2 mt-1 text-red-600 text-sm">
                            {errors.cep}
                          </span>
                        )}
                      </li>
                      <li className="flex flex-1 items-center">
                        <Link href="/">
                          <Text appearance="p1" color={blue[800]}>
                            Não sei o meu CEP
                          </Text>
                        </Link>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Endereço
                        </Text>
                        <Field
                          className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                          name="endereco"
                          type="text"
                          value={values.endereco}
                          style={{
                            background: neutralLight[200],
                            border: `1px solid ${neutralLight[400]}`,
                            color: neutralMid[500]
                          }}
                        />
                        {errors.endereco && (
                          <span className="ml-2 mt-1 text-red-600 text-sm">
                            {errors.endereco}
                          </span>
                        )}
                      </li>
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Número
                        </Text>
                        <Field
                          className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                          name="addressNumber"
                          type="text"
                          value={values.addressNumber}
                          style={{
                            background: neutralLight[200],
                            border: `1px solid ${neutralLight[400]}`,
                            color: neutralMid[500]
                          }}
                        />
                        {errors.addressNumber && (
                          <span className="ml-2 mt-1 text-red-600 text-sm">
                            {errors.addressNumber}
                          </span>
                        )}
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Complemento
                        </Text>
                        <Field
                          className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                          name="complemento"
                          type="text"
                          value={values.complemento}
                          style={{
                            background: neutralLight[200],
                            border: `1px solid ${neutralLight[400]}`,
                            color: neutralMid[500]
                          }}
                        />
                        {errors.complemento && (
                          <span className="ml-2 mt-1 text-red-600 text-sm">
                            {errors.complemento}
                          </span>
                        )}
                      </li>
                    </ul>
                    <ul className="flex mb-6 space-x-6">
                      <li className="flex-1">
                        <Text
                          appearance="p4"
                          className="mb-2"
                          color={neutralDark[500]}
                        >
                          Estado
                        </Text>
                        <div className="flex items-center">
                          <Field
                            as="select"
                            className="appearance-none border p-3 rounded text-sm w-full"
                            onChange={(e) => {
                              setFieldValue('estado', e.target.value);
                              filterStories(e.target.value);
                            }}
                            style={{
                              background: neutralLight[200],
                              borderColor: neutralLight[400],
                              color: neutralMid[500]
                            }}
                            value={values.estado}
                          >
                            <option defaultValue="default">Selecione</option>
                            {states?.map((state) => (
                              <option key={state?.uf} value={state?.uf}>
                                {state?.estado}
                              </option>
                            ))}
                          </Field>
                          <SolidIcon
                            icon="faChevronDown"
                            iconColor={neutralMid[500]}
                            newClasses="h-4 -ml-10"
                          />
                        </div>
                      </li>
                      <li className="flex-1">
                        <Text
                          appearance="p4"
                          className="mb-2"
                          color={neutralDark[500]}
                        >
                          Unidade
                        </Text>
                        <div className="flex items-center">
                          <Field
                            as="select"
                            className="appearance-none text-sm p-3 rounded w-full"
                            onChange={(e) => {
                              setFieldValue('cidade', e.target.value);
                            }}
                            style={{
                              background: neutralLight[200],
                              border: `1px solid ${neutralLight[400]}`,
                              color: neutralMid[500]
                            }}
                            value={values.cidade}
                          >
                            <option defaultValue="default">Selecione</option>
                            {filteredStories?.map((filteredStory) => (
                              <option
                                key={filteredStory?.cidade}
                                value={filteredStory?.cidade}
                              >
                                {filteredStory?.cidade}
                              </option>
                            ))}
                          </Field>
                          <SolidIcon
                            icon="faChevronDown"
                            iconColor={neutralMid[500]}
                            newClasses="h-4 -ml-10"
                          />
                        </div>
                      </li>
                    </ul>
                    <ul className="flex flex-wrap mb-6 space-x-8">
                      <li className="flex-1">
                        <Text
                          className="mb-2"
                          appearance="p4"
                          color={neutralDark[500]}
                        >
                          Bairro
                        </Text>
                        <Field
                          className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                          name="bairro"
                          type="text"
                          value={values.bairro}
                          style={{
                            background: neutralLight[200],
                            border: `1px solid ${neutralLight[400]}`,
                            color: neutralMid[500]
                          }}
                        />
                        {errors.bairro && (
                          <span className="ml-2 mt-1 text-red-600 text-sm">
                            {errors.bairro}
                          </span>
                        )}
                      </li>
                    </ul>
                  </>
                )}
                {values.forma_pagamento === 'pix' && (
                  <ul className="flex flex-col space-y-4">
                    <li>
                      <Text appearance="p3" color={neutralMid[500]}>
                        Pix é a nova modalidade de transferência do Banco
                        Central que funciona 24 horas por dia e possue
                        confirmação em tempo real
                      </Text>
                    </li>
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
