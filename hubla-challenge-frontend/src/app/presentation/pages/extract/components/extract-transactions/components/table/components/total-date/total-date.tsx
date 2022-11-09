import { changeToCurrency } from '~/app/infra/utils';
import { Box, Typography } from '~/app/presentation/components';
import { EntryIcon } from '~/app/presentation/components/icons';
import { OutputIcon } from '~/app/presentation/components/icons/output';
import {
  TotalDateProps,
  TransactionTag
} from '~/app/presentation/pages/extract/components/extract-transactions/components/table/components';
import makeStyles from './total-date-styles';

function TotalDateComponent({ data }: TotalDateProps) {
  const classes = makeStyles();

  return (
    <Box data-testid='total-date'>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.textPrimary}>{data.date}</Typography>
        </Box>
        <Box className={classes.divider} />
        <Box>
          <Typography className={`${classes.textPrimary} itemInvisibleMobile`}>
            Total do dia:
          </Typography>
        </Box>
        <Box className={classes.section}>
          <EntryIcon size={13.2} />
          <Typography className={`${classes.textSecondary} itemInvisibleDesk`}>
            Entradas:
          </Typography>
          <Typography className={`${classes.textSecondary} entryValue`}>
            +R$ {changeToCurrency({ value: data.amounts.inbound })}
          </Typography>
        </Box>
        <Box className={classes.section}>
          <OutputIcon size={13.2} />
          <Typography
            className={`${classes.textSecondary} itemInvisibleMobile`}
          >
            Saídas:
          </Typography>
          <Typography className={`${classes.textSecondary} outputValue`}>
            -R$ {changeToCurrency({ value: data.amounts.outbound })}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.transactions} data-testid='transactions'>
        {data.transactions.map((transaction, key) => (
          <TransactionTag data={transaction} key={`transaction-${key}`} />
        ))}
      </Box>
    </Box>
  );
}

export default TotalDateComponent;
