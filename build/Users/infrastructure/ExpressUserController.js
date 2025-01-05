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
exports.ExpressUserController = void 0;
const ServiceContainer_1 = require("../../Shared/infrastructure/ServiceContainer");
const UserNotFoundError_1 = require("../domain/UserNotFoundError");
class ExpressUserController {
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield ServiceContainer_1.ServiceContainer.user.getAll.run();
                return res.json(users.map((user) => user.mapToPrimitives())).status(200);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getOneById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield ServiceContainer_1.ServiceContainer.user.getOneById.run(req.params.id);
                return res.json(user.mapToPrimitives()).status(200);
            }
            catch (error) {
                if (error instanceof UserNotFoundError_1.UserNotFoundError) {
                    return res.status(404).json({ message: error.message });
                }
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, createdAt, updateAt, status, verified } = req.body;
                yield ServiceContainer_1.ServiceContainer.user.create.run(id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, new Date(createdAt), new Date(updateAt), status, verified);
                return res.status(201).send();
            }
            catch (error) {
                next(error);
            }
        });
    }
    edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, createdAt, updateAt, status, verified } = req.body;
                yield ServiceContainer_1.ServiceContainer.user.edit.run(id, countryId, userType, firstName, lastName, companyName, typeOfIdDocu, idNumber, dv, email, number, password, new Date(createdAt), new Date(updateAt), status, verified);
                return res.status(204).send();
            }
            catch (error) {
                if (error instanceof UserNotFoundError_1.UserNotFoundError) {
                    return res.status(404).json({ message: error.message });
                }
                next(error);
            }
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ServiceContainer_1.ServiceContainer.user.delete.run(req.params.id);
                return res.status(204).send();
            }
            catch (error) {
                if (error instanceof UserNotFoundError_1.UserNotFoundError) {
                    return res.status(404).json({ message: error.message });
                }
                next(error);
            }
        });
    }
}
exports.ExpressUserController = ExpressUserController;
