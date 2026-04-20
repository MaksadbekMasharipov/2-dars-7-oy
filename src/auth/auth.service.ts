import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth } from './entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { Article } from 'src/article/model/article.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Auth) private authModel:typeof Auth) {}  // data base bilan bog'lab beradi


  // register
  // async register(createAuthDto: CreateAuthDto) {
  //   const { username, email, password } = createAuthDto;

  //   const foundedUser = await this.authModel.findOne({where: {email: email}, raw: true});
  //   if (foundedUser) {
  //     throw new BadRequestException('User already exists');
  //   }

  //   const hashPassword = await bcrypt.hash(password, 10);
  //   const otp = +Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('');

  //   return this.authModel.create({username, email, password: hashPassword, otp});
  // }

  // async findAll() {
  //   return await this.authModel.findAll({attributes: {exclude: ['password']},
  //   include: [{model: Article}]
  //   });
  // }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
