const express = require("express");
const routes = express.Router();
const projectController = require("./controllers/projectController.js");

routes.get("/projects/", projectController.index);
routes.post("/projects/", projectController.create);
routes.put("/projects/:id", projectController.update);
routes.delete("/projects/:id", projectController.delete);

module.exports = routes;
