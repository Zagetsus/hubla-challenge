import { LoginComponentProps } from '~/app/domain/protocols';
import { Box } from '~/app/presentation/components';
import {
  LoginFormTag,
  LoginLogoTag,
  LoginToastTag
} from '~/app/presentation/pages/login/components';
import { LoginProvider } from '~/app/presentation/providers';
import makeStyles from './login-styles';

function Login({ validation, authentication }: LoginComponentProps) {
  const classes = makeStyles();

  return (
    <LoginProvider authentication={authentication} validation={validation}>
      <Box className={classes.container}>
        <LoginLogoTag />
        <LoginFormTag />
        <LoginToastTag />
      </Box>
    </LoginProvider>
  );
}

export default Login;
