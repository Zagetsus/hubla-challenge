import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './transaction-heading-styles';

function TransactionHeadingComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} component={'h2'}>
        Últimos lançamentos
      </Typography>
      <Typography className={classes.text}>
        Veja os lançamentos, entradas e saídas por período.
      </Typography>
    </Box>
  );
}

export default TransactionHeadingComponent;
