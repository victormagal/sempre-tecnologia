import { neutralDark, neutralLight, neutralMid } from '@/app/base/Colors';
import { Text, Title } from '@/app/base/Typography';
import { Container } from '@/app/components/Foundation';
import { Field, useFormikContext } from 'formik';

export default function ContactData() {
  const { errors, values } = useFormikContext();

  return (
    <Container>
      <div className="border col-span-10 col-start-2 flex flex-col my-6 py-8 px-12 rounded space-y-6">
        <Title appearance="h3" color={neutralDark[500]} extra>
          Dados de contato
        </Title>
        <ul className="flex flex-wrap space-x-8">
          <li className="flex-1">
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
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
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
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
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
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
            <Text className="mb-2" appearance="p4" color={neutralDark[500]}>
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
  );
}
