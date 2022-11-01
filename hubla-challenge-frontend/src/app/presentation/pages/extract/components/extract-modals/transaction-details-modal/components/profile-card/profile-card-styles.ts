import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    '& .avatar': {
      width: '1.5rem',
      height: '1.5rem'
    },
    '& .name': {
      fontSize: '1rem',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      color: '#00072B'
    }
  }
});
