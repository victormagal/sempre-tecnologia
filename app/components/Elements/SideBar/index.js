'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { neutralLight, neutralMid, red } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { getAllCategories } from '@/app/graphql/queries';
import { useQuery } from '@apollo/client';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function SideBar({ path }) {
  const { data } = useQuery(getAllCategories);
  const router = useRouter();

  return (
    <>
      <div className="col-span-4 lg:col-span-8 lg:col-start-3 flex flex-col items-center space-y-6">
        <Title appearance="h6" color={neutralMid[400]}>
          Filtre por categoria
        </Title>
        <ul className="flex flex-wrap justify-center space-x-4">
          {data?.categories?.data?.map((category) => (
            <Link
              key={category.attributes.slug}
              href={`category/${category.attributes.slug}?pagina=1`}
            >
              <li
                className={`${
                  category.attributes.slug !== path && 'border'
                } mb-4 px-6 py-3 rounded`}
                style={{
                  backgroundColor:
                    category.attributes.slug === path && red[100],
                  borderColor:
                    category.attributes.slug !== path && neutralLight[300]
                }}
              >
                <Text
                  appearance="p4"
                  color={
                    category.attributes.slug === path
                      ? red[800]
                      : neutralMid[400]
                  }
                >
                  {category.attributes.name}
                </Text>
              </li>
            </Link>
          ))}
        </ul>
        <Formik
          initialValues={{
            title: ''
          }}
          onSubmit={(values) =>
            router.push(`/pesquisa/${values.title}?pagina=1`)
          }
          validationSchema={Yup.object({
            title: Yup.string().min(3, 'Título inválido')
          })}
        >
          {({ errors, values }) => (
            <Form className="w-full">
              <ul className="flex items-center justify-center space-x-4">
                <li className="w-2/5">
                  <Field
                    className="border p-3 placeholder:text-neutral-mid-400 rounded text-neutral-mid-400 w-full"
                    maxLength={150}
                    name="title"
                    placeholder="Buscar por título"
                    style={{
                      background: neutralLight[200],
                      borderColor: errors.name ? red[900] : neutralLight[400],
                      color: neutralMid[500]
                    }}
                    type="text"
                    value={values.title}
                  />
                  {errors.title && (
                    <Text appearance="p4" color={red[900]}>
                      {errors.title}
                    </Text>
                  )}
                </li>
                <li>
                  <button
                    className="px-6 py-4 rounded w-full"
                    type="submit"
                    style={{ background: red[1000] }}
                  >
                    <Text appearance="p4" color={neutralLight[100]}>
                      Buscar
                    </Text>
                  </button>
                </li>
              </ul>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
