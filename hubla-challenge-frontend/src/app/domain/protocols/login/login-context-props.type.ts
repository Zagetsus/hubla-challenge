import React from 'react';
import { Control, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';

export type LoginContextProps = {
  onSubmit: (params: Authentication.Params) => void;
  handleSubmit: (
    onValid: SubmitHandler<Authentication.Params>,
    onInvalid?: SubmitErrorHandler<Authentication.Params>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  control: Control<Authentication.Params, never>;
  snackbar: boolean;
  snackbarClose: () => void;
};
