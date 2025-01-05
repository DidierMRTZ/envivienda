"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFirstName = void 0;
class UserFirstName {
    constructor(value) {
        this.value = value;
        this.ensureIsValid();
    }
    ensureIsValid() {
        if (this.value.length < 3) {
            throw new Error("UserName must be at least 3 characters long");
        }
    }
}
exports.UserFirstName = UserFirstName;
