import * as Yup from 'yup';

export default [
  Yup.object({
    document: Yup.string().required('Obrigatório'),
    mail: Yup.string().email('E-mail inválido').required('Obrigatório'),
    name: Yup.string().required('Obrigatório'),
    phone: Yup.string().required('Obrigatório')
  }),
  Yup.object({
    tipo_atendimento: Yup.string().required('Obrigatório'),
    estado: Yup.string().required(),
    cidade: Yup.string().required()
  })
];
