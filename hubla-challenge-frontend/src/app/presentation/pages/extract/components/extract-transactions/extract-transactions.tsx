import { Box } from '~/app/presentation/components';
import {
  TableTag,
  TransactionHeadingTag
} from '~/app/presentation/pages/extract/components/extract-transactions/components';
import makeStyles from './extract-transactions-styles';

function ExtractTransactionsComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <TransactionHeadingTag />
      <TableTag />
    </Box>
  );
}

export default ExtractTransactionsComponent;
