import { Box } from '~/app/presentation/components';
import { LogoIcon } from '~/app/presentation/components/icons';
import makeStyles from './login-logo-styles';

function LoginLogoComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <LogoIcon />
    </Box>
  );
}

export default LoginLogoComponent;
