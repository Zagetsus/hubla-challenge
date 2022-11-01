import { ErrorProps } from '~/common/interfaces';

export interface CreateManyTransactionsBodyParams {
  type: number;
  seller: string;
  product: string;
  price: number;
  createdAt: Date;
  identifications: {
    typeTransactionId: string | null;
    sellerId: string | null;
    productId: string | null;
  };
  errors?: ErrorProps[];
}

export interface CreateManyTransactionsParams {
  body: CreateManyTransactionsBodyParams[];
  userId: string;
}
