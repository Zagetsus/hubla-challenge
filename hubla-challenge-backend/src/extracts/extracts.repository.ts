import { Injectable } from '@nestjs/common';
import { PrismaService } from '~/common/services';
import { PrismaPromise, Prisma } from '@prisma/client';
import {
  PeriodsParams,
  BalanceRepositoryResponse,
  ExtractAmountsParams,
  ExtractAmountsResponse,
  PeriodsResponse,
  TransactionsParams,
  TransactionsResponse
} from '~/extracts/interface';

@Injectable()
export class ExtractsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createManyTransactions(params: {
    data: Prisma.ExtractCreateManyInput[];
  }): Promise<PrismaPromise<Prisma.BatchPayload>> {
    const { data } = params;
    return this.prismaService.extract.createMany({
      data
    });
  }

  async getExtractBalance(): Promise<BalanceRepositoryResponse[]> {
    return await this.prismaService.$queryRaw<BalanceRepositoryResponse[]>`
      SELECT sum(price) "entries", 0 "outputs"
      FROM extracts "e"
      INNER JOIN types_transactions "tt" on e.transaction_type_id = tt.id
      WHERE (tt.type = 1 OR tt.type = 2 OR tt.type = 4)
        AND price > 0

    UNION

      SELECT 0 "inbound", sum(abs(price)) "outputs"
      FROM extracts "e"
      INNER JOIN types_transactions "tt" on e.transaction_type_id = tt.id
      WHERE tt.type = 3
        AND price > 0
    `;
  }

  async getPeriodOfTheExtract(
    params: PeriodsParams
  ): Promise<PeriodsResponse[]> {
    const { take, skip } = params;

    return await this.prismaService.$queryRaw<PeriodsResponse[]>`
      SELECT date(created_at) "period"
      FROM extracts
      GROUP BY date(created_at)
      ORDER BY date(created_at) DESC
      OFFSET ${skip}
      LIMIT ${take}
    `;
  }

  async getTotalTransactionsByDay(): Promise<number> {
    const queryExecute = await this.prismaService.$queryRaw<
      Array<{ count: number }>
    >`
      SELECT count(DISTINCT date(created_at))::int
      FROM extracts
    `;
    const [result] = queryExecute;

    return result.count;
  }

  async getTotalOfDay(
    params: ExtractAmountsParams
  ): Promise<ExtractAmountsResponse[]> {
    const { startDate, endDate } = params;

    return await this.prismaService.$queryRaw<ExtractAmountsResponse[]>`
      SELECT sum(price) "inbound", 0 "outbound"
      FROM extracts "e"
      INNER JOIN types_transactions "tt" on e.transaction_type_id = tt.id
      WHERE date(e.created_at) >= date(${startDate})
        AND date(e.created_at) <= date(${endDate})
        AND (tt.type = 1 OR tt.type = 2 OR tt.type = 4)
        AND price > 0

    UNION

      SELECT 0 "inbound", sum(abs(price)) "outbound"
      FROM extracts "e"
      INNER JOIN types_transactions "tt" on e.transaction_type_id = tt.id
      WHERE date(e.created_at) >= date(${startDate})
        AND date(e.created_at) <= date(${endDate})
        AND tt.type = 3
        AND price > 0
    `;
  }

  async getTransactions(
    params: TransactionsParams
  ): Promise<TransactionsResponse[]> {
    const { date } = params;
    return this.prismaService.$queryRaw<TransactionsResponse[]>`
      SELECT p.name "product", u.name "seller", u.image_url "sellerImage", tt.description "type", tt.nature, e.price "amount", e.created_at "createdAt", e.updated_at "updatedAt"
      FROM extracts "e"
      INNER JOIN types_transactions "tt" on e.transaction_type_id = tt.id
      INNER JOIN products "p" on e.product_id = p.id
      INNER JOIN users "u" on e.seller_Id = u.id
      INNER JOIN users "us" on e.creator_id = us.id
      WHERE price <> 0
      AND date(e.created_at) = date(${date})
      ORDER BY date(e.created_at) DESC
    `;
  }
}
