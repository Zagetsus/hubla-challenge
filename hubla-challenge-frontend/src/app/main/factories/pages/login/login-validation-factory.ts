import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const makeLoginValidation = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Formato do e-mail está incorreto')
      .required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
  });
  return { resolver: yupResolver(validationSchema) };
};
