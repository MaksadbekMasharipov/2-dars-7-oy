import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { VerifyDto } from './dto/verify.dto';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOperation, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiInternalServerErrorResponse({ description: "Serverda xatolik yuz berdi" }) // swagger da bu response ni ko'rsatish uchun ishlatiladi
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({ summary: "User registration" }) // swagger da bu descriptionniko'rsatish uchun ishlatiladi
  @ApiResponse({ status: 201, description: 'User registered successfully' }) // swagger da bu response ni ko'rsatish uchun ishlatiladi
  @ApiResponse({ status: 400, description: 'User already exists' }) // swagger da bu response ni ko'rsatish uchun ishlatiladi
  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }


  @ApiResponse({ status: 200, description: 'User verified successfully' }) // swagger da bu response ni ko'rsatish uchun ishlatiladi
  @ApiBadRequestResponse({ description: 'Invalid OTP' })
  @ApiBadRequestResponse({ description: 'Wrong OTP' })
  @ApiBadRequestResponse({ description: 'expired OTP' })
  @ApiUnauthorizedResponse({ description: 'Email not found' })
  @Post('verify')
  verify(@Body() dto: VerifyDto) {
    return this.authService.verify(dto);
  }
}
