import { Box, ButtonTag } from '~/app/presentation/components';
import makeStyles from './login-button-styles';

function LoginButtonComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <ButtonTag
        type={'submit'}
        variantStyle='contained'
        className={classes.button}
      >
        Entrar
      </ButtonTag>
    </Box>
  );
}

export default LoginButtonComponent;
