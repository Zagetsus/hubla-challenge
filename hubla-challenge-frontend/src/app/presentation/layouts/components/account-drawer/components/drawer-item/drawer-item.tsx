import { useRouter } from 'next/router';
import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '~/app/presentation/components';
import { DrawerItemProps } from '~/app/presentation/layouts/components/account-drawer/components/drawer-item/drawer-item-props.interface';
import {
  ListItemButtonSx,
  ListItemIconSx
} from '~/app/presentation/layouts/components/account-drawer/components/drawer-item/drawer-item-styles';

function DrawerItemComponent({ open, url, icon, name }: DrawerItemProps) {
  const router = useRouter();

  const handleClick = async () => {
    if (url) {
      await router.push(url);
    }
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={handleClick}
        sx={ListItemButtonSx(router.pathname, open, url)}
      >
        <ListItemIcon sx={ListItemIconSx(open)}>{icon}</ListItemIcon>
        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}

export default DrawerItemComponent;
