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
exports.UserDelete = void 0;
const UserId_1 = require("../../domain/UserId");
const UserNotFoundError_1 = require("../../domain/UserNotFoundError");
class UserDelete {
    constructor(repository) {
        this.repository = repository;
    }
    run(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = new UserId_1.UserId(id);
            const userExists = yield this.repository.getOneById(userId);
            if (!userExists)
                throw new UserNotFoundError_1.UserNotFoundError("User not found");
            yield this.repository.delete(userId);
        });
    }
}
exports.UserDelete = UserDelete;
