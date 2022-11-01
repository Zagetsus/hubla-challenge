import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    marginTop: '5.1875rem',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  legendsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.9125rem'
  },
  legendCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '& p': {
      color: theme.palette.secondary.main,
      fontSize: '0.75rem',
      wordBreak: 'break-all',
      fontWeight: 400,
      lineHeight: '0rem'
    }
  },
  button: {
    fontSize: '0.875rem',
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    }
  }
});
