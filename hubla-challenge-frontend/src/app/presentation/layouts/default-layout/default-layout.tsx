import Head from 'next/head';
import { Box, Toolbar } from '~/app/presentation/components';
import { UnauthenticatedHeaderTag } from '~/app/presentation/layouts/components';
import { DefaultLayoutProps } from '~/app/presentation/layouts/default-layout/default-layout-props.interface';
import makeStyles from './default-layout-styles';

function DefaultLayoutComponent({ children }: DefaultLayoutProps) {
  const classes = makeStyles();

  return (
    <Box>
      <Head>
        <title>Hubla</title>
      </Head>

      <UnauthenticatedHeaderTag />

      <Box component='main' data-testid='default-page-body'>
        <Toolbar className={classes.toolbar} />
        {children}
      </Box>
    </Box>
  );
}

export default DefaultLayoutComponent;
