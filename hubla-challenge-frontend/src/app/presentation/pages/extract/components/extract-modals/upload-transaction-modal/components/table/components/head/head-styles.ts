import { makeStyles } from '~/app/presentation/components/mui/styles';

export default makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '48px',
    background: '#efefef',

    '& p': {
      flex: 1,
      textAlign: 'center',
      color: '#353535',
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: '1.125rem'
    },

    '& .first-cell': {
      minWidth: '9.5rem',
      width: '9.5rem'
    },

    '& .product-cell': {
      minWidth: '12.75rem',
      width: '12.75rem'
    },

    '& .seller-cell': {
      minWidth: '10rem',
      width: '10rem'
    },

    '& .type-cell': {
      minWidth: '8.75rem',
      width: '8.75rem'
    },

    '& .value-cell': {
      minWidth: '5.5rem',
      width: '5.5rem'
    }
  }
});
