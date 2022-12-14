import { Injectable } from '@nestjs/common';
import { LoginDetailsDto } from './login-details-dto';
import { RegisterationDetailsDto } from './registeration-details-dto';
import { UsersRepository } from './users.repository';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
  constructor(private usersRepo: UsersRepository) {}
  getUser(session) {
    const { firstName, lastName, city, street, zipcode } = session.user;
    return { firstName, lastName, city, street, zipcode };
  }

  async login(loginDetails: LoginDetailsDto) {
    const { username, password } = loginDetails;
    let foundUser = await this.usersRepo.findOne({ username });

    if (foundUser) {
      const res = await bcrypt.compare(password, foundUser.passwordHash);
      if (res) return foundUser;
    }
  }

  async logout(res) {
    res.clearCookie('connect.sid');
  }

  async register(regDetails: RegisterationDetailsDto, session) {
    const { username, password, firstName, lastName, email } = regDetails;
    const existingEmail = await this.usersRepo.findOne({ email });
    const existingUsername = await this.usersRepo.findOne({ username });
    if (existingEmail || existingUsername) return;

    const saltRounds = 10;
    regDetails.password = await bcrypt.hash(password, saltRounds);
    const newUser = {
      username,
      passwordHash: regDetails.password,
      firstName,
      lastName,
      email,
    };
    await this.usersRepo.save(newUser);
    session.user = await this.usersRepo.findOne({ username });
    return session.user;
  }

  async updateAddress({ city, street, zipcode }, session) {
    await this.usersRepo.update(
      {
        id: session.user.id,
      },
      {
        city,
        street,
        zipcode,
      },
    );
  }
}
