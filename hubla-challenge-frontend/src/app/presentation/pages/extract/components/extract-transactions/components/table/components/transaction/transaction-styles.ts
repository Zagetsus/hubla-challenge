import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    height: '3rem',
    padding: '0 1.1875rem'
  },
  firstCell: {
    width: '11.313rem',
    display: 'flex',
    alignItems: 'center',
    '& .icon-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3rem'
    },
    '& .course-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '3.813rem'
    },
    '& .thumbnail': {
      width: '2.75rem',
      height: '2.25rem',
      background: '#e6e6e6'
    },
    '& .code-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '4.5rem'
    },
    '& .code-text': {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '20px',
      letterSpacing: ' 0.25px',

      color: '#00072B'
    }
  },
  productCell: {
    width: '15.313rem',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.75rem',
    '& .name': {
      fontWeight: 700,
      textAlign: 'left',
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
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
    padding: '0 0.75rem',
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
    width: '10rem',
    padding: '0 0.75rem',
    gap: '0.75rem',
    '& .avatar': {
      width: '1.5rem',
      height: '1.5rem'
    },
    '& p': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      color: '#00072B'
    }
  },
  typeCell: {
    display: 'flex',
    alignItems: 'center',
    width: '8.75rem',
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
    width: '6.25rem',
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
  },
  actionCell: {
    width: '5.938rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .button': {
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
      textDecorationLine: 'underline',
      color: '#00072B'
    }
  }
});
