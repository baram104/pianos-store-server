import {
  IsAlpha,
  IsAlphanumeric,
  IsEmail,
  IsNumber,
  IsNumberString,
  IsOptional,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ primary: true, length: 30 })
  @IsAlphanumeric()
  username: string;

  @Column({
    name: 'password_hash',
    length: 500,
  })
  passwordHash: string;

  @Column({ length: 80 })
  @IsEmail()
  email: string;

  @Column({ name: 'first_name', length: 15 })
  @IsAlpha()
  firstName: string;

  @Column({ name: 'last_name', length: 15 })
  @IsAlpha()
  lastName: string;

  @Column({ length: 30, nullable: true })
  @IsOptional()
  @IsAlpha()
  city: string;

  @Column({ length: 30, nullable: true })
  @IsOptional()
  @IsAlphanumeric()
  street: string;

  @Column({ length: 10, nullable: true })
  @IsOptional()
  @IsNumberString()
  zipcode: string;
}
