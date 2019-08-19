const Project = require('./models/Project');

let request = 0;

exports.checkTitleExists = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Informe o nome do Título.' });
  }

  return next();
};

exports.checkProjectExists = (req, res, next) => {
  const { id } = req.params;
  const project = Project.findById(+id);
  if (!project) {
    return res.status(404).json({ message: 'Informe o id do usuario' });
  }
  req.project = project;
  return next();
};

exports.logger = (req, res, next) => {
  request += 1;
  console.log(`Request: ${request}`);
  next();
};
