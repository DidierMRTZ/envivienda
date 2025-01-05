import { UserGetAll } from "../../Users/application/UserGetAll/UserGetAll";
import { UserGetOneById } from "../../Users/application/UserGetOneById/UserGetOneById";
import { UserCreate } from "../../Users/application/UserCreate/UserCreate";
import { UserEdit } from "../../Users/application/UserEdit/UserEdit";
import { UserDelete } from "../../Users/application/UserDelete/UserDelete";
//import { PostgresUserRepository } from "../../../lib/User/infrastructure/PostgresUserRepository";
//import { env } from "./env";
import { InMemoryUserRepository } from "../../Users/infrastructure/InMemoryUserRepository";

// const userRepository = new PostgresUserRepository(env.DATABASE_URL);

const userRepository = new InMemoryUserRepository()

export const ServiceContainer = {
  user: {
    getAll: new UserGetAll(userRepository),
    getOneById: new UserGetOneById(userRepository),
    create: new UserCreate(userRepository),
    edit: new UserEdit(userRepository),
    delete: new UserDelete(userRepository),
  },
};
