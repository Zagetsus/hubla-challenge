import { InputBasePropsInterface } from '~/app/presentation/components/mui/interfaces';

export interface InputProps extends InputBasePropsInterface {
  name: string;
  control: any;
  title: string;
  endIcon?: JSX.Element;
  startIcon?: JSX.Element;
  message?: string;
  errorMessage?: string;
}
