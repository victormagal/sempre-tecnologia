'use client';
import Image from 'next/image';
import { useState } from 'react';
import { neutralDark, neutralMid } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function ModalForm({ open, onClose }) {
  const [loading, setLoading] = useState(false);
  const [messageMail, setMessageMail] = useState('');

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="bg-overlay-black fixed h-screen w-screen z-60"
    >
      <div
        className="absolute flex left-[50%] lg:left-[70%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-auto w-10/12 lg:w-8/12"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="bg-white p-6 w-full lg:w-1/2 ">
          <div className="flex justify-end ">
            <FontAwesomeIcon
              className="cursor-pointer h-5 w-4"
              color={neutralMid[500]}
              icon={faXmark}
              onClick={onClose}
            />
          </div>
          <div className="p-10">
            <div className="lg:col-start-2 lg:col-span-4 col-span-12">
              <Title
                appearance="h3"
                className="mb-4 font-bold"
                color={neutralDark[500]}
              >
                Ligamos para você
              </Title>
              <Text
                appearance="p2"
                className="mb-8 font-normal"
                color={neutralMid[600]}
              >
                Preencha os dados abaixo e entraremos em contato em breve.
              </Text>
            </div>
            <Formik
              initialValues={{ mail: '', name: '', phone: '' }}
              onSubmit={(values) => {
                setLoading(true);
                const config = {
                  headers: {
                    'mz-integration': 'sempre',
                    'Content-Type': 'application/json'
                  }
                };

                const body = JSON.stringify({
                  contato_nome: values.name,
                  contato_email: values.mail,
                  contato_telefone: values.phone,
                  contato_origem: 'site_st'
                });

                axios
                  .post(
                    'https://bot.sempretecnologia.com.br/index.php/fila/criaMensagem',
                    body,
                    config
                  )
                  .then(({ status }) => {
                    setLoading(false);
                    if (status === 200) {
                      setMessageMail(
                        'Enviado com sucesso! Em breve entraremos em contato.'
                      );
                    } else {
                      setMessageMail(
                        'Não foi possível no momento. Tente novamente mais tarde.'
                      );
                    }
                  });
              }}
              validationSchema={Yup.object({
                mail: Yup.string()
                  .email('E-mail inválido')
                  .required('Obrigatório'),
                name: Yup.string().required('Obrigatório'),
                phone: Yup.string().required('Obrigatório')
              })}
            >
              {({ errors, values }) => (
                <Form>
                  <ul className="flex flex-col space-y-6">
                    <li className="flex flex-col space-y-2">
                      <Text
                        htmlFor="assunto"
                        appearance="p4"
                        className="font-normal"
                        color={neutralDark[500]}
                      >
                        Assunto
                      </Text>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="name"
                        placeholder="Assunto"
                        type="text"
                        value={values.name}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.name}
                        </span>
                      )}
                    </li>
                    <li className="flex flex-col space-y-2">
                      <Text
                        htmlFor="name"
                        appearance="p4"
                        className="font-normal"
                        color={neutralDark[500]}
                      >
                        Nome
                      </Text>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="name"
                        placeholder="Insira seu nome"
                        type="text"
                        value={values.name}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.name}
                        </span>
                      )}
                    </li>
                    <li className="flex flex-col space-y-2">
                      <Text
                        htmlFor="mail"
                        appearance="p4"
                        className="font-normal"
                        color={neutralDark[500]}
                      >
                        E-mail
                      </Text>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="mail"
                        placeholder="Insira seu e-mail"
                        type="email"
                        value={values.mail}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.mail}
                        </span>
                      )}
                    </li>
                    <li className="flex flex-col space-y-2">
                      <Text
                        htmlFor="phone"
                        appearance="p4"
                        className="font-normal"
                        color={neutralDark[500]}
                      >
                        Celular ou Whatsapp
                      </Text>
                      <Field
                        className="bg-transparent border border-custom-purple font-sans px-4 py-2 placeholder:text-soft-gray text-soft-gray rounded w-full"
                        name="phone"
                        placeholder="Insira seu número"
                        type="text"
                        value={values.phone}
                      />
                      {errors.name && (
                        <span className="text-red-600 text-sm">
                          {errors.phone}
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
                    <li className="flex gap-4">
                      <button
                        className="bg-white font-sans font-bold py-4 text-blue-950 border-2 rounded-md w-1/2"
                        type="submit"
                        onClick={onClose}
                      >
                        Cancelar
                      </button>
                      <button
                        className="bg-white font-sans font-bold py-4 text-white border-2 rounded-md w-1/2"
                        style={{
                          background:
                            'linear-gradient(190deg, #039855 14%, #039855 89%)'
                        }}
                        type="submit"
                      >
                        Me ligue agora
                      </button>
                    </li>
                  </ul>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
