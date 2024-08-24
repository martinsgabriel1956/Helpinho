import express, { json } from "express";
import serverless from "serverless-http";
import appRoutes from "./src/routes/index";

const app = express();

app.use(json());
app.use(appRoutes);

export const handler = serverless(app);
