import { makeStyles } from '~/app/presentation/components/mui/styles';
import theme from '~/styles/theme/light-theme';

export default makeStyles({
  appBar: {
    display: 'flex',
    alignItems: 'center',
    height: 80,
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: '0px 0px 8px rgba(34, 34, 34, 0.15)'
  },
  appBarContentWrap: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.only('xl')]: {
      width: '100vw',
      maxWidth: '80rem'
    },
    [theme.breakpoints.only('lg')]: {
      width: '100vw',
      maxWidth: '52.5rem'
    },
    [theme.breakpoints.only('md')]: {
      width: '100vw',
      padding: '0 5rem'
    },
    [theme.breakpoints.between('xs', 'md')]: {
      width: '100vw',
      padding: '0 1.5rem'
    }
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.563rem',
    [theme.breakpoints.between('xs', 'md')]: {
      gap: '1rem'
    }
  },
  logoName: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: '100%',

    color: 'rgba(51, 51, 51, 0.9)'
  },
  button: {
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
});
