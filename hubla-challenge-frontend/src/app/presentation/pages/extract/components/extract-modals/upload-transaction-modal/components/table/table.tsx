import { Box } from '~/app/presentation/components';
import {
  HeadTag,
  RowTag
} from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/components/table/components';
import { TableProps } from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/components/table/table-props.interface';
import makeStyles from './table-styles';

function TableComponent({ transactions }: TableProps) {
  const classes = makeStyles();

  return (
    <Box>
      <HeadTag />

      <Box className={classes.tableBody}>
        {transactions.map((transaction, key) => (
          <RowTag data={transaction} key={`modal-transaction-${key}`} />
        ))}
      </Box>
    </Box>
  );
}

export default TableComponent;
