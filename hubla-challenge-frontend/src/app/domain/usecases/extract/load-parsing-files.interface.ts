export interface LoadParsingFiles {
  load: () => Promise<LoadParsingFiles.Response>;
}

export namespace LoadParsingFiles {
  export type Errors = {
    property: string;
    message: string;
  };

  export type ApiIdentifications = {
    type_transaction_id: string | null;
    seller_id: string | null;
    product_id: string | null;
  };

  export type ApiResponse = {
    type: number;
    seller: string;
    product: string;
    price: number;
    created_at: Date;
    identifications: ApiIdentifications;
    errors?: Errors[];
  };

  export type Identifications = {
    typeTransactionId: string | null;
    sellerId: string | null;
    productId: string | null;
  };

  export type Response = {
    type: number;
    seller: string;
    product: string;
    price: number;
    createdAt: Date;
    identifications: Identifications;
    errors?: Errors[];
  };
}
