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

export default function ServiceData() {
  const { errors, setFieldValue, values } = useFormikContext();
  const [service, setService] = useState(0);

  const [getStates, { data: states }] = useLazyQuery(getAllStates);
  const [getStories, { data: stories }] = useLazyQuery(getStoriesByState);
  const [getDetails, { data: storyDetails }] = useLazyQuery(getStoryDetails);

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Modelo de atendimento
        </Title>
        <div
          className="flex justify-center p-4 rounded w-full"
          style={{ background: blue[200] }}
        >
          <Text appearance="p4" color={blue[900]}>
            O valor do certificado pode varias de acordo com o modelo de
            atendimento escolhido
          </Text>
        </div>
        {errors.tipo_atendimento && (
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
                setFieldValue('tipo_atendimento', 'Videoconferencia');
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
                  Videoconferência
                </Title>
                <Text appearance="p4" color={neutralDark[500]}>
                  Fale com a nossa equipe por video com toda a comodidade.
                </Text>
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
                setFieldValue('tipo_atendimento', 'Presencial');
              }}
              style={{
                borderColor: service === 2 ? red[600] : neutralLight[400]
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
                <Text appearance="p4" color={neutralDark[500]}>
                  Seja atendido em uma de nossas filiais de atendimento.
                </Text>
              </div>
              <RegularIcon
                icon={`${service === 2 ? 'faCircleDot' : 'faCircle'}`}
                iconColor={service === 2 ? red[600] : neutralLight[500]}
                newClasses="h-6"
              />
            </li>
            <li
              className="border cursor-pointer flex space-x-6 p-6 rounded"
              onClick={() => {
                setService(3);
                setFieldValue('tipo_atendimento', 'Express');
              }}
              style={{
                borderColor: service === 3 ? red[600] : neutralLight[400]
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
                  Express
                </Title>
                <Text appearance="p4" color={neutralDark[500]}>
                  Não se preocupe! Para sua comodidade, nós vamos até você.
                </Text>
              </div>
              <RegularIcon
                icon={`${service === 3 ? 'faCircleDot' : 'faCircle'}`}
                iconColor={service === 3 ? red[600] : neutralLight[500]}
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
                        onChange={(e) =>
                          getStories({
                            variables: {
                              state: e.target.value
                            }
                          })
                        }
                        style={{
                          background: neutralLight[200],
                          borderColor: neutralLight[400],
                          color: neutralMid[500]
                        }}
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
                        onChange={(e) =>
                          getDetails({
                            variables: {
                              story: e.target.value
                            }
                          })
                        }
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
                {storyDetails && (
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
              </>
            )}
            {service === 3 && (
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
                      <select
                        className="appearance-none text-sm p-3 rounded w-full"
                        // onClick={getCities}
                        style={{
                          background: neutralLight[200],
                          border: `1px solid ${neutralLight[400]}`,
                          color: neutralMid[500]
                        }}
                      >
                        <option defaultValue="default">Selecione</option>
                        {/* {states.map(({ label, value }) => (
                                    <option key={value} value={value}>
                                      {label}
                                    </option>
                                  ))} */}
                      </select>
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
                        // onChange={getDetails}
                        style={{
                          background: neutralLight[200],
                          border: `1px solid ${neutralLight[400]}`,
                          color: neutralMid[500]
                        }}
                      >
                        <option defaultValue="default">Selecione</option>
                        {/* {stores.map(({ id, map, name, phones, whatsapp }) => (
                                  <option
                                    data-location={map}
                                    data-phones={phones}
                                    data-whatsapp={whatsapp}
                                    key={id}
                                    value={name}
                                  >
                                    {name}
                                  </option>
                                ))} */}
                      </select>
                      <SolidIcon
                        icon="faChevronDown"
                        iconColor={neutralMid[500]}
                        newClasses="h-4 -ml-10"
                      />
                    </div>
                  </li>
                </ul>
                <Text appearance="p3" color={neutralMid[500]}>
                  <b>Atenção:</b> Um de nossos especialistas entrará em contato
                  após a confirmação de pagamento.
                </Text>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
