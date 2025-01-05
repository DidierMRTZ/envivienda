"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresUserRepository = void 0;
const pg_1 = require("pg");
const User_1 = require("../domain/User");
const UserEmail_1 = require("../domain/UserEmail");
const UserId_1 = require("../domain/UserId");
const UserFirstName_1 = require("../domain/UserFirstName");
const UserLastName_1 = require("../domain/UserLastName");
const UserCompanyName_1 = require("../domain/UserCompanyName");
const UserTypeOfIdDocu_1 = require("../domain/UserTypeOfIdDocu");
const UserCountryId_1 = require("../domain/UserCountryId");
const UserType_1 = require("../domain/UserType");
const UserIdNumber_1 = require("../domain/UserIdNumber");
const UserDv_1 = require("../domain/UserDv");
const UserNumber_1 = require("../domain/UserNumber");
const UserPassword_1 = require("../domain/UserPassword");
const UserCreatedAt_1 = require("../domain/UserCreatedAt");
const UserUpdateAt_1 = require("../domain/UserUpdateAt");
const UserStatus_1 = require("../domain/UserStatus");
const UserVerified_1 = require("../domain/UserVerified");
class PostgresUserRepository {
    constructor(databaseUrl) {
        this.client = new pg_1.Pool({
            connectionString: databaseUrl,
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.client.query(query);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "SELECT * FROM users",
            };
            const result = yield this.client.query(query);
            return result.rows.map((row) => this.mapToDomain(row));
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "SELECT * FROM users WHERE id = $1",
                values: [id.value],
            };
            const result = yield this.client.query(query);
            // if (result.rows.length === 0) {
            //   return null;
            // }
            const row = result.rows[0];
            return this.mapToDomain(row);
        });
    }
    edit(user) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.client.query(query);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "DELETE FROM users WHERE id = $1",
                values: [id.value],
            };
            yield this.client.query(query);
        });
    }
    mapToDomain(user) {
        return new User_1.User(new UserId_1.UserId(user.id), new UserCountryId_1.UserCountryId(user.country_id), new UserType_1.UserType(user.user_type), new UserFirstName_1.UserFirstName(user.first_name), new UserLastName_1.UserLastName(user.last_name), new UserCompanyName_1.UserCompanyName(user.company_name), new UserTypeOfIdDocu_1.UserTypeOfIdDocu(user.type_of_id_docu), new UserIdNumber_1.UserIdNumber(user.id_number), new UserDv_1.UserDv(user.dv), new UserEmail_1.UserEmail(user.email), new UserNumber_1.UserNumber(user.number), new UserPassword_1.UserPassword(user.password), new UserCreatedAt_1.UserCreatedAt(user.created_at), new UserUpdateAt_1.UserUpdateAt(user.updated_at), new UserStatus_1.UserStatus(user.status), new UserVerified_1.UserVerified(user.verified));
    }
}
exports.PostgresUserRepository = PostgresUserRepository;
