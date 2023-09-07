'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import { maskPhoneNumber } from '@/app/utils/masks';
import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import SolidIcon from '@/app/base/SolidIcon';
import { Text } from '@/app/base/Typography';
import { sendMail } from '@/app/graphql/mutations';
import { useMutation } from '@apollo/client';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
  const [messageMail, setMessageMail] = useState('');

  const [sendMailContact, { loading }] = useMutation(sendMail, {
    onCompleted: () => setMessageMail('Mensagem enviada com sucesso!'),
    onError: () =>
      setMessageMail(
        'Sua mensagem não pode ser enviada, tente novamente mais tarde'
      )
  });

  return (
    <>
      <Formik
        initialValues={{
          mail: '',
          message: '',
          name: '',
          phone: '',
          resume: null
        }}
        onSubmit={(values) =>
          sendMailContact({
            variables: {
              mail: values.mail,
              message: values.message,
              name: values.name,
              phone: values.phone,
              resume: values.resume
            }
          })
        }
        validationSchema={Yup.object({
          mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
          message: Yup.string().required('Obrigatório'),
          name: Yup.string().required('Obrigatório'),
          phone: Yup.string().required('Obrigatório')
        })}
      >
        {({ errors, values }) => (
          <Form>
            <ul className="flex flex-col space-y-4">
              <li>
                <p>Nome completo</p>
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="name"
                  type="text"
                  value={values.name}
                />
                {errors.name && (
                  <p className="ml-2 mt-1 text-red-600 text-sm">
                    {errors.name}
                  </p>
                )}
              </li>
              <li>
                <p>E-mail</p>
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="mail"
                  type="email"
                  value={values.mail}
                />
                {errors.name && (
                  <span className="ml-2 mt-1 text-red-600 text-sm">
                    {errors.mail}
                  </span>
                )}
              </li>
              <li>
                <p>Telefone</p>
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="phone"
                  type="text"
                  value={maskPhoneNumber(values.phone)}
                />
                {errors.name && (
                  <span className="ml-2 mt-1 text-red-600 text-sm">
                    {errors.phone}
                  </span>
                )}
              </li>
              <li>
                <p>Nome da empresa</p>
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="name"
                  type="text"
                  value={values.name}
                />
                {errors.name && (
                  <p className="ml-2 mt-1 text-red-600 text-sm">
                    {errors.name}
                  </p>
                )}
              </li>
              <li className="grid grid-cols-12 col-span-12 gap-6">
                <div className="col-span-6 mb-12">
                  <Text
                    appearance="p4"
                    className="mb-2"
                    color={neutralDark[500]}
                  >
                    Estado
                  </Text>
                  <div className="flex items-center">
                    <select
                      className="appearance-none p-3 rounded w-full"
                      // onClick={getCities}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    >
                      <option defaultValue="default">Filtrar por estado</option>
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
                </div>
                <div className="col-span-6 mb-12">
                  <Text
                    appearance="p4"
                    className="mb-2"
                    color={neutralDark[500]}
                  >
                    Unidade
                  </Text>
                  <div className="flex items-center">
                    <select
                      className="appearance-none p-3 rounded w-full"
                      // onChange={getDetails}
                      style={{
                        background: neutralLight[200],
                        border: `1px solid ${neutralLight[400]}`,
                        color: neutralMid[500]
                      }}
                    >
                      <option defaultValue="default">Filtrar por loja</option>
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
                </div>
              </li>
              {/* <li>
                <Field
                  as="textarea"
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="message"
                  placeholder="Mensagem"
                  type="text"
                  value={values.message}
                />
                {errors.name && (
                  <span className="ml-2 mt-1 text-red-600 text-sm">
                    {errors.message}
                  </span>
                )}
              </li> */}
              {loading && (
                <Image
                  alt="Sempre Tecnologia"
                  height={50}
                  quality={100}
                  src="/loading.svg"
                  width={50}
                />
              )}
              {messageMail && (
                <p className="font-serif font-bold text-2xl text-gray-600">
                  {messageMail}
                </p>
              )}
              <li>
                <button
                  className={`${styles.gradientYellow} font-sans font-semibold py-4 text-white rounded w-full`}
                  type="submit"
                >
                  Enviar
                </button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </>
  );
}
