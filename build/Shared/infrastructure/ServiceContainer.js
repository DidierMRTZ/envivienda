"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceContainer = void 0;
const UserGetAll_1 = require("../../Users/application/UserGetAll/UserGetAll");
const UserGetOneById_1 = require("../../Users/application/UserGetOneById/UserGetOneById");
const UserCreate_1 = require("../../Users/application/UserCreate/UserCreate");
const UserEdit_1 = require("../../Users/application/UserEdit/UserEdit");
const UserDelete_1 = require("../../Users/application/UserDelete/UserDelete");
const PostgresUserRepository_1 = require("../../Users/infrastructure/PostgresUserRepository");
// const userRepository = new PostgresUserRepository(env.DATABASE_URL);
const userRepository = new PostgresUserRepository_1.PostgresUserRepository("postgres://myuser:mypassword@localhost:5432/mydatabase");
// const userRepository = new InMemoryUserRepository()
exports.ServiceContainer = {
    user: {
        getAll: new UserGetAll_1.UserGetAll(userRepository),
        getOneById: new UserGetOneById_1.UserGetOneById(userRepository),
        create: new UserCreate_1.UserCreate(userRepository),
        edit: new UserEdit_1.UserEdit(userRepository),
        delete: new UserDelete_1.UserDelete(userRepository),
    },
};
