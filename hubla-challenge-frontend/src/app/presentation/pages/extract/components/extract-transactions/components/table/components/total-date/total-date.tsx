import { Box, Typography } from '~/app/presentation/components';
import { EntryIcon } from '~/app/presentation/components/icons';
import { OutputIcon } from '~/app/presentation/components/icons/output';
import { TransactionTag } from '~/app/presentation/pages/extract/components/extract-transactions/components/table/components';
import makeStyles from './total-date-styles';

function TotalDateComponent() {
  const classes = makeStyles();

  return (
    <Box data-testid='total-date'>
      <Box className={classes.container}>
        <Box>
          <Typography className={classes.textPrimary}>16/10/2022</Typography>
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
            +R$ 300,00
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
            -R$ 25,00
          </Typography>
        </Box>
      </Box>
      <Box className={classes.transactions} data-testid='transactions'>
        {[...Array(10).keys()].map((_, key) => (
          <TransactionTag key={`transaction-${key}`} />
        ))}
      </Box>
    </Box>
  );
}

export default TotalDateComponent;
