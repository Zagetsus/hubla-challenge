import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Typography
} from '~/app/presentation/components';
import {
  BellIcon,
  LogoutIcon,
  TransactionIcon
} from '~/app/presentation/components/icons';
import makeStyles from './account-menu-styles';

function AccountMenuComponent() {
  const classes = makeStyles();

  const pages = [
    {
      name: 'Editar perfil',
      url: '/'
    },
    {
      name: 'Notificações',
      icon: <BellIcon />,
      url: '/'
    },
    {
      name: 'Transações',
      icon: <TransactionIcon />,
      url: '/financeiro/extrato'
    }
  ];

  return (
    <>
      <Box className={classes.menuProfileBox}>
        <Avatar style={{ width: 48, height: 48 }} />
        <Box>
          <Typography className={classes.menuProfileName}>
            Pedro Sérgio Linhares
          </Typography>
          <Typography className={classes.menuProfileOccupation}>
            Admin
          </Typography>
        </Box>
      </Box>
      {pages.map((item, key) => (
        <React.Fragment key={`${item.name}-${key}`}>
          <MenuItem className={`${classes.menu}`}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Typography className={classes.menuText}>{item.name}</Typography>
          </MenuItem>
        </React.Fragment>
      ))}
      <Divider />
      <MenuItem className={classes.menu}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <Typography className={classes.menuText}>Sair</Typography>
      </MenuItem>
    </>
  );
}

export default AccountMenuComponent;
