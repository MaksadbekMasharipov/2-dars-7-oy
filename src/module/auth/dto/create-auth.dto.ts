import { IsEmail, IsNotEmpty, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    username!: string;
    
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    password!: string;
}
