"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateAt = void 0;
class UserUpdateAt {
    constructor(value) {
        this.value = value;
        this.ensureIsValid();
    }
    ensureIsValid() {
        if (this.value > new Date()) {
            throw new Error("UserCreatedAt must be in the past");
        }
    }
}
exports.UserUpdateAt = UserUpdateAt;
