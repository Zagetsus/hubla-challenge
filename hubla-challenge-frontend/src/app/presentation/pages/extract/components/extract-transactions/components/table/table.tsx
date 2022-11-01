import { Box } from '~/app/presentation/components';
import {
  TableHeadTag,
  TotalDateTag
} from '~/app/presentation/pages/extract/components/extract-transactions/components/table/components';
import makeStyles from './table-styles';

function TableComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <TableHeadTag />
      {[...Array(4).keys()].map((_, key) => (
        <TotalDateTag key={`total-date-${key}`} />
      ))}
    </Box>
  );
}

export default TableComponent;
