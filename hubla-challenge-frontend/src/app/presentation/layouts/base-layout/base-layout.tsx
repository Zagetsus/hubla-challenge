import Head from 'next/head';
import { Box, Toolbar } from '~/app/presentation/components';
import { BaseLayoutProps } from '~/app/presentation/layouts/base-layout/base-layout-props.interface';
import {
  AccountDrawerTag,
  BreadcrumbsTag,
  HeaderTag
} from '~/app/presentation/layouts/components';
import makeStyles from './base-layout-styles';

function BaseLayoutComponent({ children, pageTitle }: BaseLayoutProps) {
  const classes = makeStyles();

  return (
    <Box>
      <Head>
        <title>Hubla</title>
      </Head>

      <HeaderTag />

      <AccountDrawerTag />

      <Box
        component='main'
        className={classes.body}
        data-testid={'base-page-body'}
      >
        <Toolbar className={classes.toolbar} />

        <BreadcrumbsTag currentPage={pageTitle} />
        {children}
      </Box>
    </Box>
  );
}

export default BaseLayoutComponent;
