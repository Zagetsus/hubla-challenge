import { ErrorProps } from '~/common/interfaces';

export interface ValidationDataFileIdentificationsResponse {
  typeTransactionId: string | null;
  sellerId: string | null;
  productId: string | null;
}

export interface ValidationDataFileResponse {
  type: number;
  seller: string;
  product: string;
  price: number;
  createdAt: Date;
  identifications: ValidationDataFileIdentificationsResponse;
  errors?: ErrorProps[];
}
