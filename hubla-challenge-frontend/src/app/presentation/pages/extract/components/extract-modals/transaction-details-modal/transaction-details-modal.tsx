import {
  Box,
  ButtonTag,
  IconButton,
  Modal,
  Typography
} from '~/app/presentation/components';
import { ClosedIcon, EntryIcon } from '~/app/presentation/components/icons';
import { ProfileCardTag } from '~/app/presentation/pages/extract/components/extract-modals/transaction-details-modal/components';
import { TransactionDetailsModalProps } from '~/app/presentation/pages/extract/components/extract-modals/transaction-details-modal/transaction-details-modal-props.interface';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './transaction-details-modal-styles';

function TransactionDetailsModalComponent({
  open,
  handleClose
}: TransactionDetailsModalProps) {
  const classes = makeStyles();

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Box className={classes.container}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <ClosedIcon />
        </IconButton>
        <Typography className={classes.title}>Detalhes da transação</Typography>

        <Box className={classes.detailsRow}>
          <Box className={classes.detailsCard}>
            <EntryIcon fill={theme.palette.success.main} size={24} />
            <Typography>ENTRADA</Typography>
          </Box>
          <Typography className={classes.typeTransaction}>
            Comissão afiliado
          </Typography>
          <Typography className={classes.value}>+ 2.000,00</Typography>
        </Box>

        <Box className={classes.body}>
          <Box className={classes.bodyRow}>
            <Typography className={classes.sectionTitle}>
              Data da transação
            </Typography>
            <Typography className={classes.sectionText}>09/10/2022</Typography>
          </Box>

          <Box className={classes.bodyRow}>
            <Typography className={classes.sectionText}>12022</Typography>
            <Typography className={`${classes.sectionTitle} heavy`}>
              Curso de Bem-Estar e Desenvolvimento
            </Typography>
          </Box>

          <Box className={classes.bodyRow}>
            <Typography className={`${classes.sectionTitle} width-default`}>
              Vendedor
            </Typography>
            <ProfileCardTag name='Ana Júlia (afiliado)' />
          </Box>

          <Box className={classes.bodyRow}>
            <Typography className={`${classes.sectionTitle} width-default`}>
              Criador
            </Typography>
            <ProfileCardTag name='Maria Helena (afiliado)' />
          </Box>
        </Box>

        <Box className={classes.buttonBox}>
          <ButtonTag className={classes.button} variantStyle={'contained'}>
            Entendi
          </ButtonTag>
        </Box>
      </Box>
    </Modal>
  );
}

export default TransactionDetailsModalComponent;
