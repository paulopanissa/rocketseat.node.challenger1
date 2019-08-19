const Project = require('../models/Project');

exports.store = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const index = Project.getIndex(+id);

    const add = Project.addTask(index, title);

    return res.status(200).json(add);
  } catch (e) {
    return res.status(400).json(e);
  }
};
