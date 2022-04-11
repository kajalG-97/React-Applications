const express = require('express');

const connect = require('./configs/db');

const userController = require("./controllers/user.controller");

const { register, login } = require("./controllers/auth.controller");

const cors = require('cors');

const port = process.env.PORT || 8800;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.listen(port, async () => {
    try {
        await connect();
        console.log(`running on port ${port}`);

    } catch (err) {
        console.log('err', err.massage);

    }
});