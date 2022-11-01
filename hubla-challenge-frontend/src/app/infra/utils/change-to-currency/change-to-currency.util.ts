export type ChangeToCurrencyProps = {
  value: number;
  currencyDisplay?: 'symbol' | 'code' | 'name' | 'narrowSymbol';
  style?: 'decimal' | 'currency';
};

export const changeToCurrency = ({
  value,
  currencyDisplay,
  style
}: ChangeToCurrencyProps) => {
  const intToDecimal = value / 100;
  return intToDecimal.toLocaleString('pt-BR', {
    style: style,
    currency: 'BRL',
    minimumFractionDigits: 2,
    currencyDisplay: currencyDisplay
  });
};
