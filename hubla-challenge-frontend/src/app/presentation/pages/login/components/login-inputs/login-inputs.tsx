import { Box, InputTag } from '~/app/presentation/components';
import { EmailIcon } from '~/app/presentation/components/icons';
import { useLoginContext } from '~/app/presentation/hooks';
import makeStyles from './login-inputs-styles';

function LoginInputsComponent() {
  const { control } = useLoginContext();

  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <InputTag
        control={control}
        name={'email'}
        title={'E-mail *'}
        placeholder='Insira seu endereço de e-mail'
        startIcon={<EmailIcon />}
      />
      <InputTag
        type={'password'}
        control={control}
        name={'password'}
        title={'Senha *'}
        placeholder='Insira sua senha'
      />
    </Box>
  );
}

export default LoginInputsComponent;
