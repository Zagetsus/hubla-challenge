export interface CreateManyTransactionsDataResponse {
  transactionTypeId: string;
  sellerId: string;
  productId: string;
  price: number;
  creatorId: string;
  createdAt: Date;
}

export interface CreateManyTransactionsResponse {
  message: 'Transactions created successfully!';
  transactions: CreateManyTransactionsDataResponse[];
}
