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
      justifyContent: 'flex-end',
      padding: '0 1.5rem'
    }
  },
  searchBox: {
    width: '100%',
    maxWidth: '26.875rem',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  accountWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: '12.5rem',
    [theme.breakpoints.down('md')]: {
      '&.web': {
        display: 'none'
      }
    }
  }
});
