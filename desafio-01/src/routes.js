const express = require("express");
const routes = express.Router();
const projectController = require("./controllers/projectController.js");

function checkId(req, res, next) {
  const { id } = req.params;
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].id === id) {
      return next();
    }
  }
  return res.json({ error: "Unmatched ID" });
}
routes.get("/projects/", projectController.index);
routes.post("/projects/", projectController.create);
routes.put("/projects/:id", checkId, projectController.update);
routes.delete("/projects/:id", checkId, projectController.delete);

routes.post("/projects/:id/tasks", checkId, projectController.createTask);

module.exports = routes;
