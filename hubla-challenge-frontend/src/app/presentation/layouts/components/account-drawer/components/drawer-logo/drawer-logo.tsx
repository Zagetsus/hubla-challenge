import React from 'react';
import { Box } from '~/app/presentation/components';
import { LogoIcon } from '~/app/presentation/components/icons';
import makeStyles from './drawer-logo-styles';

function DrawerLogoComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <LogoIcon size={40} />
    </Box>
  );
}

export default DrawerLogoComponent;
