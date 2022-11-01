import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '2rem',
    height: '2rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,

    '& span': {
      width: '2rem',
      height: '4px',
      background: theme.palette.text.primary,
      borderRadius: '10px',
      transition: 'all 0.3s linear',
      position: 'relative',
      transformOrigin: '1px',
      '&.first': {
        transform: 'rotate(45deg)'
      },
      '&.middle': {
        opacity: 0
        // transform: 'translateX(20px)'
      },
      '&.last': {
        transform: 'rotate(-45deg)'
      }
    }
  }
});
