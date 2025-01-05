"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
class UserEmail {
    constructor(value) {
        this.value = value;
        this.ensureIsValid();
    }
    ensureIsValid() {
        if (!this.value.includes("@") || !this.value.includes(".")) {
            throw new Error("UserEmail must be a valid email address");
        }
    }
}
exports.UserEmail = UserEmail;
