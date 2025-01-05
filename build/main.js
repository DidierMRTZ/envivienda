"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExpressUserRouter_1 = require("./Users/infrastructure/ExpressUserRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(ExpressUserRouter_1.ExpressUserRouter);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        console.error(err.stack);
        return res.status(500).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
