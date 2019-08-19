const mid = require('./middlewares');

const ProjectController = require('./controllers/ProjectController');
const TaskController = require('./controllers/TaskController');

module.exports = app => {
  app.get('/', (req, res) => {
    return res.json({
      message: 'Seja bem vindo ao Desafio 01',
      routes: [
        'GET: /projects',
        'POST: /projects',
        'GET: /projects/:id',
        'PUT: /projects/:id',
        'DELETE: /projects/:id',
        'POST: /projects/:id/tasks'
      ]
    });
  });

  app.get('/projects', ProjectController.index);
  app.post('/projects', mid.checkTitleExists, ProjectController.store);
  app.get('/projects/:id', mid.checkProjectExists, ProjectController.show);
  app.put(
    '/projects/:id',
    mid.checkProjectExists,
    mid.checkTitleExists,
    ProjectController.update
  );
  app.delete('/projects/:id', mid.checkProjectExists, ProjectController.delete);
  app.post('/projects/:id/tasks', mid.checkProjectExists, TaskController.store);
};
