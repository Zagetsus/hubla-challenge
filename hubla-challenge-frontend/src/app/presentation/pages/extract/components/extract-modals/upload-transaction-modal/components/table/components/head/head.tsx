import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './head-styles';

function HeadComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className='first-cell'>Data da transação</Typography>
      <Typography className='product-cell'>Produto</Typography>
      <Typography className='seller-cell'>Vendedor</Typography>
      <Typography className='type-cell'>Tipo transação</Typography>
      <Typography className='value-cell'>Valor</Typography>
    </Box>
  );
}

export default HeadComponent;
