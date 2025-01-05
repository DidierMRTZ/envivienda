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
exports.InMemoryUserRepository = void 0;
class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users.push(user);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users.find((user) => user.id.value === id.value) || null;
        });
    }
    edit(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.users.findIndex((u) => u.id.value == user.id.value);
            this.users[index] = user;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.users = this.users.filter((user) => user.id.value !== id.value);
        });
    }
}
exports.InMemoryUserRepository = InMemoryUserRepository;
