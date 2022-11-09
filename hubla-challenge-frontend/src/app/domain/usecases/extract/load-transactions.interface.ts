import { TransactionsEnum } from '~/app/domain/usecases/extract/transactions.enum';

export interface LoadTransactions {
  load: (params: LoadTransactions.Params) => Promise<LoadTransactions.Response>;
}

export namespace LoadTransactions {
  export type Params = {
    page: number;
    limit: number;
  };

  export type Transactions = {
    product: string;
    seller: string;
    sellerImage: string;
    type: string;
    nature: TransactionsEnum;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
  };

  export type Amounts = {
    inbound: number;
    outbound: number;
  };

  export type TransactionsByDate = {
    date: string;
    amounts: Amounts;
    transactions: Transactions[];
  };

  export type Meta = {
    results: number;
    currentPage: number;
    totalPages: number;
  };

  export type Response = {
    transactionsByDate: TransactionsByDate[];
    meta: Meta;
  };

  export type ApiTransactions = {
    product: string;
    seller: string;
    seller_image: string;
    type: string;
    nature: TransactionsEnum;
    amount: number;
    created_at: Date;
    updated_at: Date;
  };

  export interface ApiTransactionsByDate
    extends Omit<TransactionsByDate, 'transactions'> {
    transactions: ApiTransactions[];
  }

  export type ApiMeta = {
    results: number;
    current_page: number;
    total_pages: number;
  };

  export type ApiResponse = {
    transactions_by_date: ApiTransactionsByDate[];
    meta: ApiMeta;
  };
}
