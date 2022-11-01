import {
  Box,
  ButtonTag,
  IconButton,
  Modal,
  Slide,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from '~/app/presentation/components';
import { ClosedIcon, FilterIcon } from '~/app/presentation/components/icons';
import { FiltersModalProps } from '~/app/presentation/pages/extract/components/extract-modals/filters-modal/filters-modal-props.interface';
import makeStyles from './filtes-modal-styles';

function FiltersModalComponent({ open, handleClose }: FiltersModalProps) {
  const classes = makeStyles();
  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Slide in={open} direction={'left'}>
        <Box className={classes.container}>
          <Box className={classes.header}>
            <Box className={classes.headerTitleBox}>
              <FilterIcon />
              <Typography>Filtros</Typography>
            </Box>

            <IconButton onClick={handleClose}>
              <ClosedIcon />
            </IconButton>
          </Box>

          <Box className={classes.body}>
            <Box>
              <Typography className={classes.filterTitle}>
                Tipo de transação
              </Typography>

              <RadioGroup
                className={classes.radioBox}
                aria-labelledby='type-transaction-radio-buttons-group-label'
                defaultValue='all'
                name='type-transaction-radio-buttons-group'
              >
                <FormControlLabel
                  value='all'
                  control={<Radio />}
                  label='Tudo'
                />
                <FormControlLabel
                  value='entry'
                  control={<Radio />}
                  label='Entradas'
                />
                <FormControlLabel
                  value='output'
                  control={<Radio />}
                  label='Saídas'
                />
              </RadioGroup>
            </Box>

            <Box>
              <Typography className={classes.filterTitle}>
                Ordenar por
              </Typography>

              <RadioGroup
                className={classes.radioBox}
                aria-labelledby='order-radio-buttons-group-label'
                defaultValue='mostRecent'
                name='order-radio-buttons-group'
              >
                <FormControlLabel
                  value='mostRecent'
                  control={<Radio />}
                  label='Mais recentes'
                />
                <FormControlLabel
                  value='oldest'
                  control={<Radio />}
                  label='Mais antigas'
                />
                <FormControlLabel
                  value='lowerValue'
                  control={<Radio />}
                  label='Menor valor'
                />
                <FormControlLabel
                  value='highest value'
                  control={<Radio />}
                  label='Maior valor'
                />
              </RadioGroup>
            </Box>

            <Box>
              <Typography className={classes.filterTitle}>Vendedor</Typography>

              <RadioGroup
                className={classes.radioBox}
                aria-labelledby='seller-radio-buttons-group-label'
                defaultValue='all'
                name='seller-radio-buttons-group'
              >
                <FormControlLabel
                  value='all'
                  control={<Radio />}
                  label='Todos'
                />
                <FormControlLabel
                  value='creator'
                  control={<Radio />}
                  label='Criador'
                />
                <FormControlLabel
                  value='affiliate'
                  control={<Radio />}
                  label='Afiliado'
                />
              </RadioGroup>
            </Box>
          </Box>

          <Box>
            <ButtonTag className={classes.button} variantStyle={'contained'}>
              Aplicar filtros
            </ButtonTag>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default FiltersModalComponent;
