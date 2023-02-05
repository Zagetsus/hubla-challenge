import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { changeToCurrency } from '~/app/infra/utils';
import {
  Avatar,
  Box,
  ButtonTag,
  Typography
} from '~/app/presentation/components';
import { OutputIcon, EntryIcon } from '~/app/presentation/components/icons';
import { TransactionDetailsModalTag } from '~/app/presentation/pages/extract/components/extract-modals';
import { TransactionProps } from '~/app/presentation/pages/extract/components/extract-transactions/components/table/components';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './transaction-styles';

function TransactionComponent({ data }: TransactionProps) {
  const [modal, setModal] = useState(false);
  const { product, type, amount, seller, nature, createdAt } = data;

  const symbolNature = nature === 'ENTRY' ? '+' : '-';

  const getIconNature = (nature: 'ENTRY' | 'OUTPUT') => {
    switch (nature) {
      case 'ENTRY':
        return <EntryIcon size={19.8} fill={theme.palette.success.main} />;
      case 'OUTPUT':
        return <OutputIcon size={19.8} fill={theme.palette.error.main} />;
    }
  };

  const date = format(new Date(createdAt), 'dd/MM/yyyy', {
    locale: ptBR
  });
  const hours = format(new Date(createdAt), `hh'h':mm'm'`, {
    locale: ptBR
  });

  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.firstCell}>
        <Box className='icon-box'>{getIconNature(nature)}</Box>
        <Box className='course-box'>
          <Box className='thumbnail' />
        </Box>
        <Box className='code-box'>
          <Typography className='code-text'>12022</Typography>
        </Box>
      </Box>

      <Box className={classes.productCell}>
        <Typography title={product} className='name'>
          {product}
        </Typography>
      </Box>

      <Box className={classes.dateCell}>
        <Typography>{date}</Typography>
        <Typography>{hours}</Typography>
      </Box>

      <Box className={classes.sellerCell}>
        <Avatar className='avatar' />
        <Typography title={seller}>{seller}</Typography>
      </Box>

      <Box className={classes.typeCell}>
        <Typography>{type}</Typography>
      </Box>

      <Box className={classes.valueCell}>
        <Typography className={nature}>
          {symbolNature} {changeToCurrency({ value: amount })}
        </Typography>
      </Box>

      <Box className={classes.actionCell}>
        <ButtonTag className='button' onClick={() => setModal(true)}>
          Ver detalhes
        </ButtonTag>
      </Box>

      <TransactionDetailsModalTag
        open={modal}
        handleClose={() => setModal(false)}
      />
    </Box>
  );
}

export default TransactionComponent;
