import { useState } from 'react';
import { changeToCurrency } from '~/app/infra/utils';
import {
  Box,
  ButtonTag,
  IconButton,
  Typography
} from '~/app/presentation/components';
import { EyeIcon, LogoIcon } from '~/app/presentation/components/icons';
import { ASTERISKS_x11 } from '~/config/vars';
import makeStyles from './extract-overview-styles';

type AddCurrentFormatOrStringProps = {
  isNumber: boolean;
  alternativeValue: string;
  value: number;
};

function ExtractOverviewComponent() {
  const classes = makeStyles();

  const [values, setValues] = useState({
    balanceAvailable: ASTERISKS_x11,
    balanceTotal: ASTERISKS_x11,
    isVisible: false
  });

  const handleShowValues = () => {
    const addCurrentFormatOrString = ({
      isNumber,
      alternativeValue,
      value
    }: AddCurrentFormatOrStringProps) => {
      return isNumber ? changeToCurrency({ value }) : alternativeValue;
    };

    const parseSummaryValue = (value: number) => {
      return addCurrentFormatOrString({
        isNumber: !values.isVisible,
        alternativeValue: ASTERISKS_x11,
        value
      });
    };

    const summaryValues = {
      balanceAvailable: parseSummaryValue(200142),
      balanceTotal: parseSummaryValue(27824304),
      isVisible: !values.isVisible
    };

    setValues(summaryValues);
  };

  return (
    <Box className={classes.container}>
      <LogoIcon />

      <Box className={classes.valuesWrapper}>
        <Box>
          <Typography className={classes.titleAmount}>
            Entradas da conta
          </Typography>
          <Box className='value'>
            <Box className='currency'>
              <Typography className={classes.currency}>R$</Typography>
            </Box>
            <Box className='amount'>
              <Typography
                className={classes.balanceAmount}
                data-testid='balance-available'
              >
                {values.balanceAvailable}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography className={classes.titleAmount}>
            Saídas da conta
          </Typography>
          <Box className='value'>
            <Box className='currency'>
              <Typography className={classes.currency}>R$</Typography>
            </Box>
            <Box className='amount'>
              <Typography
                className={classes.balanceAmount}
                data-testid='balance-total'
              >
                {values.balanceTotal}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <IconButton
        onClick={handleShowValues}
        className={classes.buttonEye}
        aria-label='Mostrar/ocultar valores'
        role='buttonMobile'
        data-testid='button-show-values'
      >
        <EyeIcon visibility={values.isVisible} />
      </IconButton>

      <Box>
        <ButtonTag
          className={classes.button}
          fullWidth
          variantStyle='contained'
        >
          Transferir
        </ButtonTag>
      </Box>
    </Box>
  );
}

export default ExtractOverviewComponent;
