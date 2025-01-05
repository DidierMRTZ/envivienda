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
exports.UserEdit = void 0;
const User_1 = require("../../domain/User");
const UserEmail_1 = require("../../domain/UserEmail");
const UserId_1 = require("../../domain/UserId");
const UserFirstName_1 = require("../../domain/UserFirstName");
const UserLastName_1 = require("../../domain/UserLastName");
const UserCompanyName_1 = require("../../domain/UserCompanyName");
const UserTypeOfIdDocu_1 = require("../../domain/UserTypeOfIdDocu");
const UserCountryId_1 = require("../../domain/UserCountryId");
const UserType_1 = require("../../domain/UserType");
const UserIdNumber_1 = require("../../domain/UserIdNumber");
const UserDv_1 = require("../../domain/UserDv");
const UserNumber_1 = require("../../domain/UserNumber");
const UserPassword_1 = require("../../domain/UserPassword");
const UserCreatedAt_1 = require("../../domain/UserCreatedAt");
const UserUpdateAt_1 = require("../../domain/UserUpdateAt");
const UserStatus_1 = require("../../domain/UserStatus");
const UserVerified_1 = require("../../domain/UserVerified");
const UserNotFoundError_1 = require("../../domain/UserNotFoundError");
class UserEdit {
    constructor(repository) {
        this.repository = repository;
    }
    run(id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, createdAt, updateAt, status, verified) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User(new UserId_1.UserId(id), new UserCountryId_1.UserCountryId(countryId), new UserType_1.UserType(userType), new UserFirstName_1.UserFirstName(firstName), new UserLastName_1.UserLastName(lastName), new UserCompanyName_1.UserCompanyName(companyName), new UserTypeOfIdDocu_1.UserTypeOfIdDocu(typeOfIdDocu), new UserIdNumber_1.UserIdNumber(idNumber), new UserDv_1.UserDv(dv), new UserEmail_1.UserEmail(email), new UserNumber_1.UserNumber(number), new UserPassword_1.UserPassword(password), new UserCreatedAt_1.UserCreatedAt(createdAt), new UserUpdateAt_1.UserUpdateAt(updateAt), new UserStatus_1.UserStatus(status), new UserVerified_1.UserVerified(verified));
            const userExists = yield this.repository.getOneById(user.id);
            if (!userExists)
                throw new UserNotFoundError_1.UserNotFoundError("User not found");
            return this.repository.edit(user);
        });
    }
}
exports.UserEdit = UserEdit;
