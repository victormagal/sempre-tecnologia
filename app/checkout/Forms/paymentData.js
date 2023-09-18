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
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Foundation';
import {
  getAllStates,
  getStoriesByState,
  getStoryDetails
} from '@/app/graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { Field, useFormikContext } from 'formik';

export default function PaymentData() {
  const { errors, setFieldValue, values } = useFormikContext();
  const [service, setService] = useState(0);
  const [serviceExpress, setServiceExpress] = useState(false);

  const [getStates, { data: states }] = useLazyQuery(getAllStates);
  const [getStories, { data: stories }] = useLazyQuery(getStoriesByState);
  const [getDetails, { data: storyDetails }] = useLazyQuery(getStoryDetails);

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Formas de pagamento
        </Title>
        {(errors.tipo_atendimento || errors.estado || errors.cidade) && (
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
          <ul className="flex flex-col space-y-4 w-2/5">
            <li
              className="border cursor-pointer flex space-x-6 p-6 rounded"
              onClick={() => {
                setService(1);
                setServiceExpress(false);
                setFieldValue('tipo_atendimento', 'videoconferencia');
              }}
              style={{
                borderColor: service === 1 ? red[600] : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faCirclePlay"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Cartão de crédito
                </Title>
              </div>
              <RegularIcon
                icon={`${service === 1 ? 'faCircleDot' : 'faCircle'}`}
                iconColor={service === 1 ? red[600] : neutralLight[500]}
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex space-x-6 p-6 rounded"
              onClick={() => {
                getStates();
                setService(2);
                setServiceExpress(false);
                setFieldValue('tipo_atendimento', 'presencial');
              }}
              style={{
                borderColor:
                  service === 2 && !serviceExpress
                    ? red[600]
                    : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faUser"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Presencial
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  service === 2 && !serviceExpress ? 'faCircleDot' : 'faCircle'
                }`}
                iconColor={
                  service === 2 && !serviceExpress
                    ? red[600]
                    : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex space-x-6 p-6 rounded"
              onClick={() => {
                setService(2);
                setServiceExpress(true);
                setFieldValue('tipo_atendimento', 'express');
              }}
              style={{
                borderColor:
                  service === 2 && serviceExpress ? red[600] : neutralLight[400]
              }}
            >
              <div
                className="h-8 flex items-center justify-center rounded-full w-10"
                style={{ background: red[100] }}
              >
                <RegularIcon
                  icon="faUser"
                  iconColor={red[900]}
                  newClasses="h-4"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Title appearance="h6" color={neutralDark[500]}>
                  Pix
                </Title>
              </div>
              <RegularIcon
                icon={`${
                  service === 2 && serviceExpress ? 'faCircleDot' : 'faCircle'
                }`}
                iconColor={
                  service === 2 && serviceExpress ? red[600] : neutralLight[500]
                }
                newClasses="h-6"
              />
            </li>
          </ul>
          <div className="w-3/5">
            {service === 1 && (
              <ul className="flex flex-col space-y-4 list-disc">
                <li>
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Observação:</b> Para atendimento via videoconferência é
                    necessário ter computador, câmera e conexão com internet de
                    boa qualidade.
                  </Text>
                </li>
                <li>
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Atenção:</b> Um de nossos especialistas entrará em
                    contato após a confirmação de pagamento.
                  </Text>
                </li>
              </ul>
            )}
            {service === 2 && (
              <>
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
                          getStories({
                            variables: {
                              state: e.target.value
                            }
                          });
                          setFieldValue('estado', e.target.value);
                        }}
                        style={{
                          background: neutralLight[200],
                          borderColor: neutralLight[400],
                          color: neutralMid[500]
                        }}
                        value={values.estado}
                      >
                        <option defaultValue="default">Selecione</option>
                        {states?.estados?.data?.map((estado) => (
                          <option
                            key={estado?.id}
                            value={estado?.attributes?.uf}
                          >
                            {estado?.attributes?.label}
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
                      <select
                        className="appearance-none text-sm p-3 rounded w-full"
                        onChange={(e) => {
                          getDetails({
                            variables: {
                              story: e.target.value
                            }
                          });
                          setFieldValue('cidade', e.target.value);
                        }}
                        style={{
                          background: neutralLight[200],
                          border: `1px solid ${neutralLight[400]}`,
                          color: neutralMid[500]
                        }}
                      >
                        <option defaultValue="default">Selecione</option>
                        {stories?.filiais?.data?.map((filial) => (
                          <option
                            key={filial?.id}
                            value={filial?.attributes?.label}
                          >
                            {filial?.attributes?.label}
                          </option>
                        ))}
                      </select>
                      <SolidIcon
                        icon="faChevronDown"
                        iconColor={neutralMid[500]}
                        newClasses="h-4 -ml-10"
                      />
                    </div>
                  </li>
                </ul>
                {!serviceExpress && storyDetails && (
                  <div
                    className="flex p-8 rounded space-x-6"
                    style={{ backgroundColor: neutralLight[200] }}
                  >
                    <div className="flex flex-col space-y-4">
                      <Title appearance="h5" color={neutralDark[500]}>
                        Loja Sempre Tecnologia{' '}
                        {storyDetails?.filiais?.data[0]?.attributes?.label}
                      </Title>
                      <Text appearance="p4" color={neutralDark[500]}>
                        {storyDetails?.filiais?.data[0]?.attributes?.telefones}
                      </Text>
                      <Text appearance="p3" color={neutralMid[500]}>
                        {storyDetails?.filiais?.data[0]?.attributes?.endereco}
                      </Text>
                      <Link
                        href={storyDetails?.filiais?.data[0]?.attributes?.mapa}
                        target="_blank"
                      >
                        <button
                          className="flex items-center space-x-3"
                          type="button"
                        >
                          <Text appearance="p3" color={blue[800]}>
                            Ver no mapa
                          </Text>
                          <SolidIcon
                            icon="faChevronRight"
                            iconColor={blue[800]}
                            newClasses="h-3"
                          />
                        </button>
                      </Link>
                    </div>
                    <div>
                      <RegularIcon
                        icon="faCircleDot"
                        iconColor={red[600]}
                        newClasses="h-6"
                      />
                    </div>
                  </div>
                )}
                {serviceExpress && (
                  <Text appearance="p3" color={neutralMid[500]}>
                    <b>Atenção:</b> Um de nossos especialistas entrará em
                    contato após a confirmação de pagamento.
                  </Text>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
