"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatedAt = void 0;
class UserCreatedAt {
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
exports.UserCreatedAt = UserCreatedAt;
