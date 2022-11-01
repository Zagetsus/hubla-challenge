import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1.5181rem',
    margin: '2.25rem 1.0625rem 1.8469rem 1.0625rem',
    [theme.breakpoints.down('xl')]: {
      marginTop: '2.0625rem',
      gap: '0.25rem',
      '& .itemInvisibleDesk': {
        display: 'none'
      }
    },
    [theme.breakpoints.only('md')]: {
      marginTop: '2.0631rem'
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '3rem',
      gap: '0.25rem',
      flexWrap: 'wrap',
      padding: '0 1.5rem',
      '& .itemInvisibleMobile': {
        display: 'none'
      }
    }
  },
  divider: {
    height: '1px',
    backgroundColor: theme.palette.divider,
    flex: 1
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem'
  },
  textPrimary: {
    fontSize: '0.875rem',
    fontWeight: 700,
    color: theme.palette.secondary.main
  },
  textSecondary: {
    fontSize: '0.875rem',
    color: theme.palette.secondary.main,
    lineHeight: '1.05rem',
    '&.entryValue': {
      color: theme.palette.success.main,
      fontWeight: 700
    },
    '&.outputValue': {
      color: theme.palette.error.main,
      fontWeight: 700
    },
    [theme.breakpoints.down('xl')]: {
      fontSize: '0.625rem'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.75rem'
    }
  },
  transactions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  }
});
