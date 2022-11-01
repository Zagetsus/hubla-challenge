import { ReactElement } from 'react';

export interface DrawerItemProps {
  open: boolean;
  url?: string;
  icon: ReactElement;
  name: string;
}
