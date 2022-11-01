import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    height: '9rem',
    padding: '2.5rem 2.498rem',
    marginTop: '2.25rem',
    gap: '2rem',
    border: '1px solid #E9E9E9',
    alignItems: 'center',
    borderRadius: '0.25rem',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  valuesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.563rem',
    '& .value': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      gap: '0.3rem',
      '& .currency': {
        width: '1.5rem'
      },
      '& .amount': {
        width: '7rem',
        display: 'flex'
      }
    },
    '& svg': {
      minWidth: '0.813rem'
    },
    [theme.breakpoints.only('xl')]: {
      gap: '2.813rem',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    [theme.breakpoints.only('lg')]: {
      minWidth: '20rem',
      '& > div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '3rem',
        '& > p': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }
      }
    },
    [theme.breakpoints.only('md')]: {
      minWidth: '18rem',
      '& > div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minWidth: '13.5rem',
        '& > p': {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }
      }
    },
    [theme.breakpoints.between('xs', 'md')]: {
      '& > div:first-child': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '0.5px solid #E9E9E9',
        paddingBottom: '1.125rem'
      },
      '& > div + div': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '0.5rem'
      }
    }
  },
  titleAmount: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: theme.palette.text.primary,
    lineHeight: '1.4rem',
    letterSpacing: '0.00714em',
    [theme.breakpoints.down('xl')]: {
      ...theme.typography.subtitle1,
      lineHeight: '1.05rem',
      color: theme.palette.text.primary
    },
    [theme.breakpoints.down('md')]: {
      '& > .mobileText': {
        fontSize: '0.75rem',
        color: theme.palette.text.primary
      }
    },
    '& > button': {
      padding: '0',
      minWidth: '0',
      margin: '0 0.4rem'
    }
  },
  balanceAmount: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.4rem',
    letterSpacing: '0.00714em',

    color: theme.palette.text.secondary
  },
  currency: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.4rem',
    letterSpacing: '0.00714em',
    color: theme.palette.text.secondary
  },
  buttonEye: {
    minWidth: '2.063rem',
    minHeight: '1.375rem',
    padding: '0'
  },
  button: {
    width: '12.5rem'
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
