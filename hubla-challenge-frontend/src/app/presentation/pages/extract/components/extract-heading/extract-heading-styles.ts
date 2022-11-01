import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: '1.25rem',
    letterSpacing: '-0.01562em',
    color: theme.palette.secondary.main
  },
  button: {
    width: '308px',
    height: '40px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  iconButton: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      width: '2rem',
      height: '2rem',
      borderRadius: '0.25rem',
      border: `0.125rem solid ${theme.palette.primary.main}`
    }
  }
});
