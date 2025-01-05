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
                text: "INSERT INTO users (id, name, email) VALUES ($1, $2, $3)",
                values: [user.id.value, user.firstName.value, user.email.value],
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
            if (result.rows.length === 0) {
                return null;
            }
            const row = result.rows[0];
            return this.mapToDomain(row);
        });
    }
    edit(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
                values: [user.firstName.value, user.email.value, user.id.value],
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
        return new User_1.User(new UserId_1.UserId(user.id), new UserCountryId_1.UserCountryId(user.countryId), new UserType_1.UserType(user.userType), new UserFirstName_1.UserFirstName(user.firstName), new UserLastName_1.UserLastName(user.lastName), new UserCompanyName_1.UserCompanyName(user.companyName), new UserTypeOfIdDocu_1.UserTypeOfIdDocu(user.typeOfIdDocu), new UserIdNumber_1.UserIdNumber(user.idNumber), new UserDv_1.UserDv(user.dv), new UserEmail_1.UserEmail(user.email), new UserNumber_1.UserNumber(user.number), new UserPassword_1.UserPassword(user.password), new UserCreatedAt_1.UserCreatedAt(user.createdAt), new UserUpdateAt_1.UserUpdateAt(user.updateAt), new UserStatus_1.UserStatus(user.status), new UserVerified_1.UserVerified(user.verified));
    }
}
exports.PostgresUserRepository = PostgresUserRepository;
