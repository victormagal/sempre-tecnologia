'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './styles.module.css';
import { maskPhoneNumber } from '@/app/utils/masks';
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
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="name"
                  placeholder="Nome"
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
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="mail"
                  placeholder="E-mail"
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
                <Field
                  className="bg-transparent border border-gray-300 font-sans px-8 py-4 placeholder:text-gray-600 text-gray-600 rounded w-full"
                  name="phone"
                  placeholder="Telefone com DDD"
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
              </li>
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
