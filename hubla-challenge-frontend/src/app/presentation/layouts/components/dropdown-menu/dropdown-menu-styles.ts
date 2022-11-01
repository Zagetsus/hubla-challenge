import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export const componentProps = {
  root: {
    style: {
      zIndex: 1
    }
  }
};

export const paperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    boxShadow: 'rgb(34 34 34 / 15%) 0px 4px 8px',
    backgroundColor: '#FFFFFF',
    width: 351,
    padding: 3,
    overflowY: 'auto',
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1
    },
    [theme.breakpoints.down('md')]: {
      top: '0 !important',
      left: '0 !important',
      padding: 'calc(80px + 45px) 24px',
      backgroundColor: '#F5F5F5',
      width: '100vw',
      minHeight: '100%',
      maxWidth: '100vw',
      maxHeight: 'auto',
      boxShadow: 'none'
    }
  }
};

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem'
  },
  text: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '0.875rem',
    letterSpacing: '0.0015em',

    color: theme.palette.secondary.main
  },
  avatarBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.673rem'
  },
  burgerMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});
