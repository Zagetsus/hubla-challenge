import {
  ExtractAmountsResponse,
  TransactionsResponse
} from '~/extracts/interface';

export interface TransactionsDataByDate {
  date: string;
  amounts: ExtractAmountsResponse;
  transactions: TransactionsResponse[];
}
export interface TransactionsByDateResponse {
  transactionsByDate: TransactionsDataByDate[];
  totalPages: number;
  results: number;
}
