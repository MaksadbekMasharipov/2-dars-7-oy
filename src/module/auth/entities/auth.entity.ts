
import { BaseEntity } from 'src/database/entities/base.entity';
import { Roles } from 'src/shared/enums/roles.enum';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity({name: 'auth'})
export class Auth extends BaseEntity{

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({type: "enum", enum: Roles, default: Roles.USER})
  role!: Roles;

  @Column()
  otp!: string;

  @Column({type: 'bigint'})
  otpTime!: number;

}