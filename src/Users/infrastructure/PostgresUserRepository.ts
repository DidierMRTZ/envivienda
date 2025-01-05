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
  country_id: string,
  user_type: string,
  first_name: string,
  last_name: string,
  company_name: string,
  type_of_id_docu: string,
  id_number: string,
  dv: number,
  email: string,
  number: number,
  password: string,
  created_at: Date,
  updated_at: Date,
  status: string,
  verified: boolean
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
      text: `INSERT INTO users (
        id, 
        country_id, 
        user_type, 
        first_name, 
        last_name, 
        company_name, 
        type_of_id_docu, 
        id_number, 
        dv, 
        email, 
        number, 
        password, 
        status, 
        verified
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
      )`,
      values: [
        user.id.value,
        user.countryId.value,
        user.userType.value,
        user.firstName.value,
        user.lastName.value,
        user.companyName.value,
        user.typeOfIdDocu.value,
        user.idNumber.value,
        user.dv.value,
        user.email.value,
        user.number.value,
        user.password.value,
        user.status.value,
        user.verified.value,
      ],
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

    // if (result.rows.length === 0) {
    //   return null;
    // }

    const row = result.rows[0];

    return this.mapToDomain(row);
  }

  async edit(user: User): Promise<void> {
    const query = {
      text: `
        UPDATE users
        SET 
          first_name = $1,
          last_name = $2,
          email = $3,
          country_id = $4,
          user_type = $5,
          company_name = $6,
          type_of_id_docu = $7,
          id_number = $8,
          dv = $9,
          number = $10,
          password = $11,
          status = $12,
          verified = $13,
          updated_at = $14
        WHERE id = $15
      `,
      values: [
        user.firstName,
        user.lastName,
        user.email,
        user.countryId,
        user.userType,
        user.companyName,
        user.typeOfIdDocu,
        user.idNumber,
        user.dv,
        user.number,
        user.password,
        user.status,
        user.verified,
        user.updateAt,
        user.id,
      ],
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
      new UserCountryId(user.country_id),
      new UserType(user.user_type),
      new UserFirstName(user.first_name),
      new UserLastName(user.last_name),
      new UserCompanyName(user.company_name),
      new UserTypeOfIdDocu(user.type_of_id_docu),
      new UserIdNumber(user.id_number),
      new UserDv(user.dv),
      new UserEmail(user.email),
      new UserNumber(user.number),
      new UserPassword(user.password),
      new UserCreatedAt(user.created_at),
      new UserUpdateAt(user.updated_at),
      new UserStatus(user.status),
      new UserVerified(user.verified),
    );
  }
}
