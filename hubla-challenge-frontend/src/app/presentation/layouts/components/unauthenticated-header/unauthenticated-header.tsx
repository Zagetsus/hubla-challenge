import { useRouter } from 'next/router';
import { AppBar, Box, Typography } from '~/app/presentation/components';
import { ButtonTag } from '~/app/presentation/components/common';
import { LogoIcon } from '~/app/presentation/components/icons';
import makeStyles from './unauthenticated-header-styles';

function UnauthenticatedHeaderComponent() {
  const classes = makeStyles();

  const router = useRouter();

  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.appBarContentWrap}>
        <Box className={classes.logoWrap}>
          <LogoIcon size={42.62} />
          <Typography>Plataforma de curso</Typography>
        </Box>

        <ButtonTag
          data-testid='default-menu-button'
          onClick={() => router.push('/')}
          className={classes.button}
        >
          Entrar na conta!
        </ButtonTag>
      </Box>
    </AppBar>
  );
}

export default UnauthenticatedHeaderComponent;
