import { useState } from 'react';
import {
  Avatar,
  Box,
  ButtonTag,
  Typography
} from '~/app/presentation/components';
import { OutputIcon } from '~/app/presentation/components/icons/output';
import { TransactionDetailsModalTag } from '~/app/presentation/pages/extract/components/extract-modals';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './transaction-styles';

function TransactionComponent() {
  const [modal, setModal] = useState(false);

  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.firstCell}>
        <Box className='icon-box'>
          <OutputIcon size={19.8} fill={theme.palette.error.main} />
        </Box>
        <Box className='course-box'>
          <Box className='thumbnail' />
        </Box>
        <Box className='code-box'>
          <Typography className='code-text'>12022</Typography>
        </Box>
      </Box>

      <Box className={classes.productCell}>
        <Typography className='name'>
          Curso de Bem-Estar e Desenvolvimento
        </Typography>
      </Box>

      <Box className={classes.dateCell}>
        <Typography>06/10/2022</Typography>
        <Typography>16h:25m</Typography>
      </Box>

      <Box className={classes.sellerCell}>
        <Avatar className='avatar' />
        <Typography>Maria Helena</Typography>
      </Box>

      <Box className={classes.typeCell}>
        <Typography>Comissão afiliado</Typography>
      </Box>

      <Box className={classes.valueCell}>
        <Typography>+ R$ 300,00</Typography>
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
