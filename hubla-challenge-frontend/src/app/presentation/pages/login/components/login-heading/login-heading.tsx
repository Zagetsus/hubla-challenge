import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './login-heading-styles';

function LoginHeadingComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography component={'h1'} className={classes.heading}>
        Entrar no hubla!
      </Typography>
    </Box>
  );
}

export default LoginHeadingComponent;
