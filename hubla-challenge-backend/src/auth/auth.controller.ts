import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { AuthService } from '~/auth/auth.service';
import { AuthApiOperation, AuthCredentialsRequestDTO } from '~/auth/dto';
import { BadRequestDTO, UnauthorizedRequestDTO } from '~/common/dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation(AuthApiOperation)
  @ApiBadRequestResponse({ type: BadRequestDTO })
  @ApiUnauthorizedResponse({ type: UnauthorizedRequestDTO })
  @Post()
  async signIn(@Body() params: AuthCredentialsRequestDTO): Promise<any> {
    try {
      return await this.authService.signIn(params);
    } catch (error) {
      console.log(error);
      if (error.status === 401) {
        throw new UnauthorizedException();
      }

      throw new BadRequestException();
    }
  }
}
