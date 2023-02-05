import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    height: '3rem'
  },
  firstCell: {
    maxWidth: '9.5rem',
    width: '9.5rem',
    display: 'flex',
    alignItems: 'center',
    '& .icon-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem'
    }
  },
  productCell: {
    minWidth: '12.75rem',
    width: '12.75rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.75rem',
    '& .name': {
      fontWeight: 700,
      textAlign: 'left',
      fontSize: '14px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: '#00072B'
    }
  },
  dateCell: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '6.438rem',
    '& p': {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',

      color: '#00072B'
    }
  },
  sellerCell: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '10rem',
    width: '10rem',
    padding: '0 0.75rem',
    gap: '0.75rem',
    '& .avatar': {
      width: '1.5rem',
      height: '1.5rem'
    },
    '& p': {
      fontWeight: 400,
      fontSize: '14px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      color: '#00072B'
    }
  },
  typeCell: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '8.75rem',
    padding: '0 0.5rem',
    '& p': {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',

      color: '#00072B'
    }
  },
  valueCell: {
    width: '5.5rem',
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.25px',

      '&.ENTRY': {
        color: '#2F8C0E'
      },
      '&.OUTPUT': {
        color: '#D80027'
      }
    }
  }
});
