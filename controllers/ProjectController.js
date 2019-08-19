const Project = require('../models/Project');

exports.index = (req, res, next) => {
  return res.json(Project);
};

exports.store = (req, res, next) => {
  try {
    const { title } = req.body;
    const save = Project.save({ title });
    console.log(save);
    return res.status(201).json(save);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.show = (req, res, next) => {
  const { id } = req.params;

  const project = Project.findById(+id);

  return res.status(200).json(project);
};

exports.update = (req, res, next) => {
  try {
    const { id } = req.params;

    const { title } = req.body;

    const project = Project.findById(+id);

    const updated = Project.merge(project, { title });

    const save = Project.update(updated);

    return res.status(200).json(save);
  } catch (e) {
    return res.status(400).json(e);
  }
};

exports.delete = (req, res, next) => {
  try {
    const { id } = req.params;

    const index = Project.getIndex(id);

    Project.splice(index, 1);

    return res.status(200).json({
      message: 'Projeto removido com sucesso.'
    });
  } catch (e) {
    return res.status(400).json(e);
  }
};
