import { Box } from '~/app/presentation/components';
import { useExtractContext } from '~/app/presentation/hooks';
import {
  TableHeadTag,
  TotalDateTag
} from '~/app/presentation/pages/extract/components/extract-transactions/components/table/components';
import makeStyles from './table-styles';

function TableComponent() {
  const classes = makeStyles();
  const { transactionsResponse } = useExtractContext();
  console.log(transactionsResponse);
  return (
    <Box className={classes.container}>
      <TableHeadTag />
      {transactionsResponse.transactionsByDate.map((transactionByDate, key) => (
        <TotalDateTag data={transactionByDate} key={`total-date-${key}`} />
      ))}
    </Box>
  );
}

export default TableComponent;
