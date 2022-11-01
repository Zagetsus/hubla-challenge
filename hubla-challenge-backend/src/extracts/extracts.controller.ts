import {
  BadRequestException,
  Body,
  Controller,
  Get,
  ParseArrayPipe,
  Post,
  Query,
  UseGuards
} from '@nestjs/common';
import { ExtractsService } from '~/extracts/extracts.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AppLogger } from '~/app.logger';
import { BadRequestDTO, UnauthorizedRequestDTO } from '~/common/dto';
import {
  TransactionsByDateQueryDTO,
  TransactionsByDateResponseDTO,
  TransactionByDateApiOperation,
  BalanceResponseDTO,
  BalanceApiOperation,
  CreateManyTransactionsBodyDTO,
  CreateManyTransactionsResponseDTO,
  CreateManyTransactionsApiOperation
} from '~/extracts/dto';
import { GetUser } from '~/common/decorators';

@UseGuards(AuthGuard('jwt'))
@ApiTags('extracts')
@Controller('extracts')
export class ExtractsController {
  constructor(
    private readonly extractService: ExtractsService,
    private readonly logger: AppLogger
  ) {}

  @ApiOperation(CreateManyTransactionsApiOperation)
  @ApiCreatedResponse({ type: CreateManyTransactionsResponseDTO })
  @ApiBody({ type: [CreateManyTransactionsBodyDTO] })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
  @Post('/create-many-transactions')
  async createTransactions(
    @GetUser() user,
    @Body(
      new ParseArrayPipe({
        items: CreateManyTransactionsBodyDTO,
        transformOptions: {
          enableImplicitConversion: true
        }
      })
    )
    body: CreateManyTransactionsBodyDTO[]
  ) {
    const { id } = user;
    const response = await this.extractService
      .createManyTransactions({ body, userId: id })
      .catch(e => {
        throw new BadRequestException(e.message);
      });

    return CreateManyTransactionsResponseDTO.factory(response);
  }

  @ApiOperation(BalanceApiOperation)
  @ApiOkResponse({ type: BalanceResponseDTO })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
  @Get('/balance')
  async getExtractBalance() {
    return this.extractService.getExtractBalance().catch(err => {
      this.logger.fail({
        category: 'EXTRACTS_CONTROLLER_ERROR',
        error: err.message
      });
      throw new BadRequestException();
    });
  }

  @ApiOperation(TransactionByDateApiOperation)
  @ApiOkResponse({ type: TransactionsByDateResponseDTO })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
  @Get('/transactions-by-date')
  async getTransactionsByDay(@Query() params: TransactionsByDateQueryDTO) {
    const { page: currentPage, limit } = params;

    const response = await this.extractService
      .getTransactionsByDay({
        page: currentPage,
        take: limit
      })
      .catch(err => {
        this.logger.fail({
          category: 'EXTRACTS_CONTROLLER_ERROR',
          error: err.message
        });
        throw new BadRequestException();
      });

    return TransactionsByDateResponseDTO.factory({
      transactions: response.transactionsByDate,
      meta: {
        results: response.results,
        currentPage,
        totalPages: response.totalPages
      }
    });
  }
}
