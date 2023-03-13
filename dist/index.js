"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var port = process.env.PORT;
app.get("/", function (req, res) {
    res.send("Wecolme to ITS Prdigi API course");
});
app.use("/users", userRoutes_1["default"]);
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map