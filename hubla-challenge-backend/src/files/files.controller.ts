import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { Express } from 'express';
import {
  ApiBadRequestResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from '~/files/files.service';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';
import { AuthGuard } from '@nestjs/passport';
import { AppLogger } from '~/app.logger';
import { BadRequestDTO, UnauthorizedRequestDTO } from '~/common/dto';
import {
  FilesApiConsumes,
  FilesApiImplicitFile,
  FilesApiOperation,
  FilesResponseDTO
} from '~/files/dto';

@ApiTags('files')
@UseGuards(AuthGuard('jwt'))
@Controller('files')
export class FilesController {
  constructor(
    private readonly fileService: FilesService,
    private readonly logger: AppLogger
  ) {}

  @ApiOperation(FilesApiOperation)
  @ApiConsumes(FilesApiConsumes)
  @ApiImplicitFile(FilesApiImplicitFile)
  @ApiCreatedResponse({ type: [FilesResponseDTO] })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async parsingFile(@UploadedFile() file: Express.Multer.File) {
    const response = await this.fileService
      .validationDataFile({ path: file.path })
      .catch(err => {
        this.logger.fail({
          category: 'FILES_CONTROLLER_ERROR',
          error: err.message
        });
        throw new BadRequestException();
      });

    return FilesResponseDTO.factory(response);
  }
}
