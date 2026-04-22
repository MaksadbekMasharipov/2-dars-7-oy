import { IsNotEmpty, IsString, IsEmail } from "class-validator";


export class VerifyDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNotEmpty()
  @IsString()
  otp!: string;
}