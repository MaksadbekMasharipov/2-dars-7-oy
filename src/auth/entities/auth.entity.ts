import { Article } from 'src/article/model/article.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name: 'auth'})
export class Auth{
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  otp!: string;


}