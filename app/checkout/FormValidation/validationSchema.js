import * as Yup from 'yup';

export default [
  Yup.object({
    document: Yup.string().required('Obrigatório'),
    mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
    name: Yup.string().required('Obrigatório'),
    phone: Yup.string().required('Obrigatório')
  }),
  Yup.object({
    has_atendimento: Yup.boolean(),
    tipo_atendimento: Yup.string().required('Escolha um modelo de atendimento'),
    estado: Yup.string().when('has_atendimento', {
      is: true,
      then: () => Yup.string().required('Obrigatório')
    }),
    cidade: Yup.string().when('has_atendimento', {
      is: true,
      then: () => Yup.string().required('Obrigatório')
    })
  })
];
