import { UseFormProps } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';

export type LoginComponentProps = {
  validation: UseFormProps<Authentication.Params>;
  authentication: Authentication;
};
