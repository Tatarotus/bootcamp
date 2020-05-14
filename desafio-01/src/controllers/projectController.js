const projects = [
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
module.exports = {
  async index(req, res) {
    try {
      return res.json(projects);
    } catch (err) {
      res.json(err);
    }
  },
  async create(req, res) {
    try {
      const { id, title } = req.body;
      if (id && title) {
        const newProject = { id, title };
        projects.push(newProject);
        return res.json(newProject);
      }
      return res.json({ error: "Must have an Id and a title" });
    } catch (err) {
      console.log(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      projects.filter(project => {
        if (project.id === id) {
          project.title = title;
          return project;
        }
      });
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const newProjects = projects.filter(project => project.id !== id);
      res.json(newProjects);
      // Find a way to update the project array with the new Projects value -- There's a JSTalk / conference for that
    } catch (err) {
      console.log(err);
    }
  }
};
