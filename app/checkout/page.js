'use client';
import { useState } from 'react';
import { neutralDark, neutralLight, neutralMid, red } from '../base/Colors';
import RegularIcon from '../base/RegularIcon';
import SolidIcon from '../base/SolidIcon';
import { Overline, Text, Title } from '../base/Typography';
import { Container } from '../components/Foundation';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Checkout() {
  const [service, setService] = useState(0);

  return (
    <main className="pt-24">
      <Container>
        <ul className="border col-span-10 col-start-2 flex justify-between my-6 py-8 px-12 rounded">
          <li>
            <Title appearance="h4" color={neutralDark[500]} extra>
              Certificado
              <br />
              selecionado
            </Title>
          </li>
          <li className="flex flex-col space-y-1">
            <div
              className="py-2 rounded text-center"
              style={{ background: '#E6F8F2' }}
            >
              <Overline appearance="o1" color="#076E4F">
                25% off
              </Overline>
            </div>
            <div>
              <Title appearance="h4" color={neutralDark[400]} extra>
                e-CPF A1
              </Title>
            </div>
          </li>
          <li className="flex flex-col space-y-1">
            <Text
              appearance="p3"
              color={neutralMid[600]}
              className="line-through"
            >
              De R$169 por
            </Text>
            <Title appearance="h2" color={neutralDark[500]} extra>
              R$ 126,75
            </Title>
            <Text appearance="p3" color={neutralMid[600]}>
              3x de R$42,25 no crédito
            </Text>
            <Text appearance="p4" color={neutralDark[500]}>
              Validade de 12 meses
            </Text>
          </li>
          <li className="flex items-center">
            <button
              className="border flex items-center justify-center py-4 px-8 rounded-md space-x-3"
              style={{
                background: neutralLight[100],
                borderColor: neutralLight[500]
              }}
            >
              <Title appearance="h7" color={neutralDark[500]}>
                Trocar certificado
              </Title>
            </button>
          </li>
        </ul>
      </Container>
      <Formik
        initialValues={{
          document: '',
          mail: '',
          name: '',
          phone: ''
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          document: Yup.string().required('Obrigatório'),
          mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
          name: Yup.string().required('Obrigatório'),
          phone: Yup.string().required('Obrigatório')
        })}
      >
        {({ errors, values }) => (
          <Form>
            <Container>
              <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
                <Title appearance="h3" color={neutralDark[500]} extra>
                  Dados de contato
                </Title>
                <ul className="flex flex-wrap space-x-8">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      CPF/CNPJ
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="document"
                      type="text"
                      value={values.document}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.name && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.document}
                      </span>
                    )}
                  </li>
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Nome
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="name"
                      type="text"
                      value={values.name}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.name && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.name}
                      </span>
                    )}
                  </li>
                </ul>
                <ul className="flex flex-wrap space-x-8">
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Email
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="mail"
                      type="email"
                      value={values.mail}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.name && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.mail}
                      </span>
                    )}
                  </li>
                  <li className="flex-1">
                    <Text
                      className="mb-2"
                      appearance="p4"
                      color={neutralDark[500]}
                    >
                      Telefone
                    </Text>
                    <Field
                      className="border text-sm font-sans p-3 placeholder:text-gray-600 text-gray-600 rounded w-full"
                      name="phone"
                      type="phone"
                      value={values.phone}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    />
                    {errors.name && (
                      <span className="ml-2 mt-1 text-red-600 text-sm">
                        {errors.phone}
                      </span>
                    )}
                  </li>
                </ul>
              </div>
            </Container>
            <Container>
              <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
                <Title appearance="h3" color={neutralDark[500]} extra>
                  Modelo de atendimento
                </Title>
                <div className="flex space-x-16 w-full">
                  <ul className="flex flex-col space-y-4 w-2/5">
                    <li
                      className="border cursor-pointer flex space-x-6 p-6 rounded"
                      onClick={() => setService(1)}
                      style={{
                        borderColor:
                          service === 1 ? red[600] : neutralLight[400]
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
                          Fale com a nossa equipe por video com toda a
                          comodidade.
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
                      onClick={() => setService(2)}
                      style={{
                        borderColor:
                          service === 2 ? red[600] : neutralLight[400]
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
                      onClick={() => setService(3)}
                      style={{
                        borderColor:
                          service === 3 ? red[600] : neutralLight[400]
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
                          Não se preocupe! Para sua comodidade, nós vamos até
                          você.
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
                            <b>Observação:</b> Para atendimento via
                            videoconferência é necessário ter computador, câmera
                            e conexão com internet de boa qualidade.
                          </Text>
                        </li>
                        <li>
                          <Text appearance="p3" color={neutralMid[500]}>
                            <b>Atenção:</b> Um de nossos especialistas entrará
                            em contato após a confirmação de pagamento.
                          </Text>
                        </li>
                      </ul>
                    )}
                    {service === 2 && (
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
                                <option defaultValue="default">
                                  Selecione
                                </option>
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
                                <option defaultValue="default">
                                  Selecione
                                </option>
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
                          <b>Atenção:</b> Um de nossos especialistas entrará em
                          contato após a confirmação de pagamento.
                        </Text>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </Form>
        )}
      </Formik>
    </main>
  );
}
