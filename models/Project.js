let storeId = 1;

const Project = [
  {
    id: 1,
    title: 'Project 1',
    tasks: ['Initial']
  }
];

Project.save = title => {
  storeId = storeId + 1;
  Project.push({ id: storeId, ...title, tasks: [] });

  return Project.findById(storeId);
};

Project.update = object => {
  const index = Project.findIndex(p => (p.id = object.id));
  Project[index] = object;
  return Project[index];
};

Project.merge = (object, value) => {
  return { ...object, ...value };
};

Project.findById = id => Project.find(p => p.id === id);

Project.addTask = (index, title) => {
  Project[index].tasks.push(title);
  return Project[index];
};

Project.getIndex = id => Project.findIndex(p => p.id === id);

module.exports = Project;
