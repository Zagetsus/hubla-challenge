import { TransactionsEnum } from '~/app/domain/usecases';

type TypeTransaction = 1 | 2 | 3 | 4;

export function getDescriptionByTypeTransactions(type: TypeTransaction) {
  switch (type) {
    case 1:
      return 'Venda produtor';
    case 2:
      return 'Venda afiliado';
    case 3:
      return 'Comissão paga';
    case 4:
      return 'Comissão recebida';
  }
}

export function getNatureByTypeTransaction(
  type: TypeTransaction
): TransactionsEnum {
  switch (type) {
    case 1:
      return <TransactionsEnum>'ENTRY';
    case 2:
      return <TransactionsEnum>'ENTRY';
    case 3:
      return <TransactionsEnum>'OUTPUT';
    case 4:
      return <TransactionsEnum>'ENTRY';
  }
}
