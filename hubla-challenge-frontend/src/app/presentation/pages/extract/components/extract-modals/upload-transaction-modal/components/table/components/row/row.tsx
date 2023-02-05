import { format } from 'date-fns';
import { TransactionsEnum } from '~/app/domain/usecases';
import {
  changeToCurrency,
  getDescriptionByTypeTransactions,
  getNatureByTypeTransaction
} from '~/app/infra/utils';
import { Avatar, Box, Typography } from '~/app/presentation/components';
import { OutputIcon, EntryIcon } from '~/app/presentation/components/icons';
import { RowProps } from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/components/table/components/row/row-props.interface';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './row-styles';

function RowComponent({ data }: RowProps) {
  const { product, type, price, seller, createdAt } = data;

  const nature = getNatureByTypeTransaction(type);

  const symbolNature = nature === 'ENTRY' ? '+' : '-';

  const getIconNature = (nature: TransactionsEnum) => {
    switch (nature) {
      case 'ENTRY':
        return <EntryIcon size={19.8} fill={theme.palette.success.main} />;
      case 'OUTPUT':
        return <OutputIcon size={19.8} fill={theme.palette.error.main} />;
    }
  };

  const date = format(new Date(createdAt), 'dd/MM/yyyy');
  const hours = format(new Date(createdAt), `hh'h':mm'm'`);

  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.firstCell}>
        <Box className='icon-box'>{getIconNature(nature)}</Box>

        <Box className={classes.dateCell}>
          <Typography>{date}</Typography>
          <Typography>{hours}</Typography>
        </Box>
      </Box>

      <Box className={classes.productCell}>
        <Typography title={product} className='name'>
          {product}
        </Typography>
      </Box>

      <Box className={classes.sellerCell}>
        <Avatar className='avatar' />
        <Typography title={seller}>{seller}</Typography>
      </Box>

      <Box className={classes.typeCell}>
        <Typography>{getDescriptionByTypeTransactions(type)}</Typography>
      </Box>

      <Box className={classes.valueCell}>
        <Typography className={nature}>
          {symbolNature} R$ {changeToCurrency({ value: price })}
        </Typography>
      </Box>
    </Box>
  );
}

export default RowComponent;
