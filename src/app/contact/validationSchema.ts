import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  message: yup.string().required('Campo obrigatório'),
});

export default validationSchema;
