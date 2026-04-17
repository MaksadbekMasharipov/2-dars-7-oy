import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Article } from 'src/article/model/article.entity';


@Table({ tableName: 'auth', timestamps: true })
export class Auth extends Model<Auth> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  otp!: string;

  @HasMany(() => Article)
    articles?: Article[]
}