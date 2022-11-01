import { LightTheme as theme } from '~/styles/theme';

export const ListItemButtonSx = (
  pathname: string,
  open: boolean,
  url?: string
) => ({
  minHeight: 48,
  px: 2.5,
  borderRadius: '8px',
  justifyContent: open ? 'initial' : 'center',
  backgroundColor:
    pathname === url ? theme.palette.primary.main : 'transparent',

  '&:hover': {
    backgroundColor:
      pathname === url ? theme.palette.primary.main : 'rgba(0, 0, 0, 0.04)'
  }
});

export const ListItemIconSx = (open: boolean) => ({
  minWidth: 0,
  mr: open ? 3 : 'auto',
  justifyContent: 'center'
});
