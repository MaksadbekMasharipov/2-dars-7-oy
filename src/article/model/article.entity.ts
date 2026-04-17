import { Table, Column, Model, DataType, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import { Auth } from 'src/auth/model/auth.entity';

@Table({ tableName: 'article', timestamps: true })
export class Article extends Model<Article> {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content!: string;


  @ForeignKey(() => Auth)
  @Column({
    type: DataType.INTEGER,
    allowNull:false
  })
  userId!: number;


  @BelongsTo(() => Auth)
  user_id!: number;
}