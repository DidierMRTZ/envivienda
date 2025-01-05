import { Pool } from "pg";
import { User } from "../domain/User";
import { UserEmail } from "../domain/UserEmail";
import { UserId } from "../domain/UserId";
import { UserFirstName } from "../domain/UserFirstName";
import { UserLastName } from "../domain/UserLastName";
import { UserCompanyName } from "../domain/UserCompanyName";
import { UserTypeOfIdDocu } from "../domain/UserTypeOfIdDocu";
import { UserCountryId } from "../domain/UserCountryId";
import { UserType } from "../domain/UserType";
import { UserIdNumber } from "../domain/UserIdNumber";
import { UserDv } from "../domain/UserDv";
import { UserNumber } from "../domain/UserNumber";
import { UserPassword } from "../domain/UserPassword";
import { UserCreatedAt } from "../domain/UserCreatedAt";
import { UserUpdateAt } from "../domain/UserUpdateAt";
import { UserStatus } from "../domain/UserStatus";
import { UserVerified } from "../domain/UserVerified";
import { UserRepository } from "../domain/UserRepository";

type PostgresUser = {
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
  number: number,
  password: string,
  createdAt: Date,
  updateAt: Date,
  status: string,
  verified: boolean,
};

export class PostgresUserRepository implements UserRepository {
  client: Pool;

  constructor(databaseUrl: string) {
    this.client = new Pool({
      connectionString: databaseUrl,
    });
  }

  async create(user: User): Promise<void> {
    const query = {
      text: "INSERT INTO users (id, name, email) VALUES ($1, $2, $3)",
      values: [user.id.value, user.firstName.value, user.email.value],
    };

    await this.client.query(query);
  }

  async getAll(): Promise<User[]> {
    const query = {
      text: "SELECT * FROM users",
    };

    const result = await this.client.query<PostgresUser>(query);

    return result.rows.map((row) => this.mapToDomain(row));
  }

  async getOneById(id: UserId): Promise<User | null> {
    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [id.value],
    };

    const result = await this.client.query<PostgresUser>(query);

    if (result.rows.length === 0) {
      return null;
    }

    const row = result.rows[0];

    return this.mapToDomain(row);
  }

  async edit(user: User): Promise<void> {
    const query = {
      text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
      values: [user.firstName.value, user.email.value, user.id.value],
    };

    await this.client.query(query);
  }

  async delete(id: UserId): Promise<void> {
    const query = {
      text: "DELETE FROM users WHERE id = $1",
      values: [id.value],
    };

    await this.client.query(query);
  }

  private mapToDomain(user: PostgresUser): User {
    return new User(
      new UserId(user.id),
      new UserCountryId(user.countryId),
      new UserType(user.userType),
      new UserFirstName(user.firstName),
      new UserLastName(user.lastName),
      new UserCompanyName(user.companyName),
      new UserTypeOfIdDocu(user.typeOfIdDocu),
      new UserIdNumber(user.idNumber),
      new UserDv(user.dv),
      new UserEmail(user.email),
      new UserNumber(user.number),
      new UserPassword(user.password),
      new UserCreatedAt(user.createdAt),
      new UserUpdateAt(user.updateAt),
      new UserStatus(user.status),
      new UserVerified(user.verified),
    );
  }
}
