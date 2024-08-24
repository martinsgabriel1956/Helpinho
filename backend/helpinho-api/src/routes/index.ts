import express from "express";
import userRoutes from "./user.js";
import helpRoutes from "./help.js";
import realizedHelpRoutes from "./realized-help.js";

const appRoutes = express.Router();

appRoutes.use(userRoutes);
appRoutes.use(helpRoutes);
appRoutes.use(realizedHelpRoutes);

appRoutes.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

export default appRoutes;
