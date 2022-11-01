import React from 'react';
import { Avatar } from '~/app/presentation/components';
import {
  BellIcon,
  HomeIcon,
  LogoutIcon,
  SettingsIcon,
  TransactionIcon,
  UserCheckIcon
} from '~/app/presentation/components/icons';

export const pages = [
  {
    name: 'Minha conta',
    icon: <Avatar className={'avatar'}>L</Avatar>,
    url: '/minha-conta'
  },
  {
    name: 'Dashboard',
    icon: <HomeIcon />,
    url: '/dashboard'
  },
  {
    name: 'Notificações',
    icon: <BellIcon />,
    url: '/notificacoes'
  },
  {
    name: 'Financeiro',
    icon: <TransactionIcon />,
    url: '/financeiro/extrato'
  },
  {
    name: 'Minha conta',
    icon: <UserCheckIcon />,
    url: '/minha-conta'
  }
];
export const actions = [
  {
    name: 'Configurações',
    icon: <SettingsIcon />
  },
  {
    name: 'Sair da conta',
    icon: <LogoutIcon />
  }
];
