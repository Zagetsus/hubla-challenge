import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './table-head-styles';

function TableHeadComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Typography className='cols code'>Código</Typography>
      <Typography className='cols product'>Produto</Typography>
      <Typography className='cols date'>Data da transação</Typography>
      <Typography className='cols seller'>Vendedor</Typography>
      <Typography className='cols type'>Tipo Transação</Typography>
      <Typography className='cols value'>Valor</Typography>
      <Typography className='cols action'>Ação</Typography>
    </Box>
  );
}

export default TableHeadComponent;
