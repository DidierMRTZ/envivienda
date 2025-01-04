import { User } from "../../domain/User";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserFirstName } from "../../domain/UserFirstName";
import { UserLastName } from "../../domain/UserLastName";
import { UserCompanyName } from "../../domain/UserCompanyName";
import { UserTypeOfIdDocu } from "../../domain/UserTypeOfIdDocu";
import { UserCountryId } from "../../domain/UserCountryId";
import { UserType } from "../../domain/UserType";
import { UserIdNumber } from "../../domain/UserIdNumber";
import { UserDv } from "../../domain/UserDv";
import { UserNumber } from "../../domain/UserNumber";
import { UserPassword } from "../../domain/UserPassword";
import { UserCreatedAt } from "../../domain/UserCreatedAt";
import { UserUpdateAt } from "../../domain/UserUpdateAt";
import { UserStatus } from "../../domain/UserStatus";
import { UserVerified } from "../../domain/UserVerified";
import { UserRepository } from "../../domain/UserRepository";

export class UserCreate {
  constructor(private repository: UserRepository) {}

  async run(
    id: string,
    countryId: string,
    userType: string,
    firstName: string,
    lastName: string,
    companyName: string,
    typeOfIdDocu: string,
    idNumber: string,
    dv: number,
    email: string,
    number: string,
    password: string,
    createdAt: Date,
    updateAt: Date,
    status: string,
    verified: string,
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserCreatedAt(createdAt)
    );

    return this.repository.create(user);
  }
}
