"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
const UserGetAll_1 = require("../../Users/application/UserGetAll/UserGetAll");
const UserGetOneById_1 = require("../../Users/application/UserGetOneById/UserGetOneById");
const UserCreate_1 = require("../../Users/application/UserCreate/UserCreate");
const UserEdit_1 = require("../../Users/application/UserEdit/UserEdit");
const UserDelete_1 = require("../../Users/application/UserDelete/UserDelete");
//import { PostgresUserRepository } from "../../../lib/User/infrastructure/PostgresUserRepository";
//import { env } from "./env";
const InMemoryUserRepository_1 = require("../../Users/infrastructure/InMemoryUserRepository");
// const userRepository = new PostgresUserRepository(env.DATABASE_URL);
const userRepository = new InMemoryUserRepository_1.InMemoryUserRepository();
exports.ServiceContainer = {
    user: {
        getAll: new UserGetAll_1.UserGetAll(userRepository),
        getOneById: new UserGetOneById_1.UserGetOneById(userRepository),
        create: new UserCreate_1.UserCreate(userRepository),
        edit: new UserEdit_1.UserEdit(userRepository),
        delete: new UserDelete_1.UserDelete(userRepository),
    },
};
