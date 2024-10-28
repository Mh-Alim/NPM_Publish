"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_inference_1 = require("@mh-alim/zod-inference");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/signIn", (req, res) => {
    console.log(req.body);
    const parsedRes = zod_inference_1.signInInput.safeParse(req.body);
    if (!parsedRes.success) {
        return res.status(200).json({
            message: parsedRes.error.name,
        });
    }
    return res.json({ message: "User signed in successfully" });
});
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
