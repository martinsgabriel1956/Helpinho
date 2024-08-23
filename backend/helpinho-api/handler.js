const express = require("express");
const serverless = require("serverless-http");
const { default: appRoutes } = require("./src/router");

const app = express();

app.use(express.json());
app.use(appRoutes);

exports.handler = serverless(app);
