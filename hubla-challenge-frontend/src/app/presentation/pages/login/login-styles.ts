import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '26rem',
    margin: '4rem auto 6.25rem',
    [theme.breakpoints.between('xs', 'md')]: {
      width: '100vw',
      padding: '0 1.5rem'
    }
  }
});
