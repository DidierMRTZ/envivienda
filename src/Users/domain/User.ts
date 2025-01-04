import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserFirstName } from "./UserFirstName";
import { UserLastName } from "./UserLastName";
import { UserCompanyName } from "./UserCompanyName";
import { UserTypeOfIdDocu } from "./UserTypeOfIdDocu";
import { UserCountryId } from "./UserCountryId";
import { UserType } from "./UserType";
import { UserIdNumber } from "./UserIdNumber";
import { UserDv } from "./UserDv";
import { UserNumber } from "./UserNumber";
import { UserPassword } from "./UserPassword";
import { UserCreatedAt } from "./UserCreatedAt";
import { UserUpdateAt } from "./UserUpdateAt";
import { UserStatus } from "./UserStatus";
import { UserVerified } from "./UserVerified";


export class User {
  id: UserId;
  countryId: UserCountryId;
  userType: UserType;
  firstName: UserFirstName;
  lastName: UserLastName;
  companyName: UserCompanyName;
  typeOfIdDocu: UserTypeOfIdDocu;
  idNumber: UserIdNumber;
  dv: UserDv;
  email: UserEmail;
  number: UserNumber;
  password: UserPassword;
  createdAt: UserCreatedAt;
  updateAt: UserUpdateAt;
  status: UserStatus;
  verified: UserVerified;

  constructor(
    id: UserId,
    countryId: UserCountryId,
    userType: UserType,
    firstName: UserFirstName,
    lastName: UserLastName,
    companyName: UserCompanyName,
    typeOfIdDocu: UserTypeOfIdDocu,
    idNumber: UserIdNumber,
    dv: UserDv,
    email: UserEmail,
    number: UserNumber,
    password: UserPassword,
    createdAt: UserCreatedAt,
    updateAt: UserUpdateAt,
    status: UserStatus,
    verified: UserVerified,
  ) {
    this.id = id;
    this.countryId = countryId;
    this.userType = userType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
    this.typeOfIdDocu = typeOfIdDocu;
    this.idNumber = idNumber;
    this.dv = dv;
    this.email = email;
    this.number = number;
    this.password = password;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
    this.status = status;
    this.verified = verified;
  }

  public mapToPrimitives() {
    return {
      id: this.id.value,
      countryId: this.countryId.value,
      userType: this.userType.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      companyName: this.companyName.value,
      typeOfIdDocu: this.typeOfIdDocu.value,
      idNumber: this.idNumber.value,
      dv: this.dv.value,
      email: this.email.value,
      number: this.number.value,
      password: this.password.value,
      createdAt: this.createdAt.value,
      updateAt: this.updateAt.value,
      status: this.status.value,
      verified: this.verified.value,
    };
  }
}
