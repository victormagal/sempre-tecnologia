'use client';
import Image from 'next/image';
import Link from 'next/link';
import { getAllCategories } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function SideBar() {
  const { data } = useQuery(getAllCategories);

  return (
    <>
      <div className="bg-white rounded-xl drop-shadow p-8">
        <h1 className="border-b font-serif font-bold pb-4 text-2xl text-dark-blue">
          Filtre por categoria
        </h1>
        <ul>
          {data?.categories?.data?.map((category, i) => (
            <Link key={i} href={`category/${category.attributes.slug}`}>
              <li className="font-sans mt-4 text-lg text-soft-gray">
                {category.attributes.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div
        style={{
          background: 'linear-gradient(265deg, #CF2932 0%, #77335F 100%)'
        }}
        className="my-8 px-8 py-12 rounded-xl flex flex-col items-center"
      >
        <Image
          alt="Sempre Tecnologia"
          className="mb-4"
          height={53}
          quality={100}
          src="/mail.svg"
          width={64}
        />
        <h1 className="font-serif font-bold mb-4 text-custom-orange text-2xl text-center">
          Fique por dentro das novidades
        </h1>
        <p className="font-sans mb-4 text-white text-center">
          Assine nossa newsletter e receba as novidades Sempre Tecnologia
        </p>
        <Formik
          initialValues={{ mail: '', message: '', name: '', phone: '' }}
          onSubmit={() => {
            console.log('submitou');
          }}
          validationSchema={Yup.object({
            mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
            name: Yup.string().required('Obrigatório')
          })}
        >
          {({ errors, values }) => (
            <Form>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Field
                    className="bg-transparent border border-white font-sans px-8 py-4 placeholder:text-white text-white rounded w-full"
                    name="name"
                    placeholder="Nome"
                    type="text"
                    value={values.name}
                  />
                  {errors.name && (
                    <span className="ml-2 mt-1 text-white text-sm">
                      * {errors.name}
                    </span>
                  )}
                </li>
                <li>
                  <Field
                    className="bg-transparent border border-white font-sans px-8 py-4 placeholder:text-white text-white rounded w-full"
                    name="mail"
                    placeholder="E-mail"
                    type="email"
                    value={values.mail}
                  />
                  {errors.name && (
                    <span className="ml-2 mt-1 text-white text-sm">
                      * {errors.mail}
                    </span>
                  )}
                </li>
                <li>
                  <button
                    className="bg-white font-sans font-semibold py-4 text-custom-purple rounded w-full"
                    type="submit"
                  >
                    Cadastrar e-mail
                  </button>
                </li>
              </ul>
            </Form>
          )}
        </Formik>
      </div>
      <div className="bg-dark-blue rounded-xl p-10 flex flex-col items-center">
        <h1 className="font-serif font-bold text-xl text-white">
          Siga nas redes sociais
        </h1>
        <ul className="flex space-x-4 mt-4">
          <li>
            <a
              href="https://www.facebook.com/sempretecnologia/"
              target="_blank"
              title="Facebook"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="h-6 text-white"
                icon={faFacebookSquare}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/sempre-tecnologia/"
              target="_blank"
              title="LinkedIn"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-6 text-white" icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sempretecnologia/"
              target="_blank"
              title="Instagram"
              rel="noreferrer"
            >
              <FontAwesomeIcon className="h-6 text-white" icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
