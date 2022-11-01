import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import { Authentication } from '~/app/domain/usecases';
import { LoginContext } from '~/app/presentation/contexts';

type LoginProviderProps = {
  validation: UseFormProps<Authentication.Params>;
  authentication: Authentication;
  children?: ReactNode;
};

export const LoginProvider = ({
  validation,
  authentication,
  children
}: LoginProviderProps) => {
  const [snackbar, setSnackbar] = useState(false);
  const { handleSubmit, control } = useForm<Authentication.Params>({
    ...validation,
    mode: 'onTouched'
  });

  const router = useRouter();

  function snackbarClose(
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  }

  function onSubmit(params: Authentication.Params) {
    authentication
      .signIn(params)
      .then(() => {
        router.push('/financeiro/extrato');
      })
      .catch(() => setSnackbar(true));
  }

  return (
    <LoginContext.Provider
      value={{
        onSubmit,
        handleSubmit,
        control,
        snackbar,
        snackbarClose
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
