"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, createdAt, updateAt, status, verified) {
        this.id = id;
        this.countryId = countryId;
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyName = companyName;
        this.typeOfIdDocu = typeOfIdDocu;
        this.idNumber = idNumber;
        this.dv = dv;
        this.email = email;
        this.number = number;
        this.password = password;
        this.createdAt = createdAt;
        this.updateAt = updateAt;
        this.status = status;
        this.verified = verified;
    }
    mapToPrimitives() {
        return {
            id: this.id.value,
            countryId: this.countryId.value,
            userType: this.userType.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            companyName: this.companyName.value,
            typeOfIdDocu: this.typeOfIdDocu.value,
            idNumber: this.idNumber.value,
            dv: this.dv.value,
            email: this.email.value,
            number: this.number.value,
            password: this.password.value,
            createdAt: this.createdAt.value,
            updateAt: this.updateAt.value,
            status: this.status.value,
            verified: this.verified.value,
        };
    }
}
exports.User = User;
