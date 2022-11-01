import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  toolbar: {
    height: '5rem'
  },
  body: {
    width: '100%',
    maxWidth: '66.563rem',
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '37.938rem'
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      padding: '0 24px'
    }
  }
});
