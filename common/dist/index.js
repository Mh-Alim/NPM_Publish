"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInInput = void 0;
const zod_1 = require("zod");
exports.signInInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
console.log("here");