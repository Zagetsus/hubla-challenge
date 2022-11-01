import React from 'react';
import { Divider, List } from '~/app/presentation/components/mui';
import {
  DrawerItemTag,
  DrawerLogoTag
} from '~/app/presentation/layouts/components/account-drawer/components';
import {
  actions,
  pages
} from '~/app/presentation/layouts/components/account-drawer/config';
import makeStyles, { Drawer } from './account-drawer-styles';

function AccountDrawerComponent() {
  const classes = makeStyles();
  const [open] = React.useState(false);

  return (
    <Drawer variant='permanent' open={open}>
      <DrawerLogoTag />

      <List className={classes.list}>
        {pages.map((page, key) => (
          <DrawerItemTag key={`page-${key}`} open={open} {...page} />
        ))}

        <Divider />

        {actions.map((action, key) => (
          <DrawerItemTag key={`action-${key}`} open={open} {...action} />
        ))}
      </List>
    </Drawer>
  );
}

export default AccountDrawerComponent;
