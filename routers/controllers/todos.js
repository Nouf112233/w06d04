const todos = [
  {
    task: "sleep",
    isDel: false,
    isCompleated: false,
  },
];

const getAlltodos = (req, res) => {
  const found = todos.filter((todo) => !todo.isDel);
  try {
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(400).json("not found");
    }
  } catch {
    res.status(400).json(error);
  }
};

const getTodoById = (req, res) => {
  const { id } = req.params;
  const found = todos.find((todo) => !todo.isDel && todo.id == id);
  try {
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(400).json("not found");
    }
  } catch {
    res.status(400).json(error);
  }
};

const getTodoCompleated = (req, res) => {
  const found = todos.filter(
    (todo) => !todo.isDel && todo.isCompleated == true
  );
  try {
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(400).json("not found");
    }
  } catch {
    res.status(400).json(error);
  }
};

const newTodo = (req, res) => {
  const newtask = {
    task: req.body.task,
    isDel: false,
    isCompleated: false,
  };
  tados.push(newtask);
  try {
    res.status(200).json(found);
  } catch {
    res.status(400).json(error);
  }
};

const ubdateTodo = (req, res) => {
  const { id } = req.params;
  const found = todos.find((todo, i) => {
    if (!todo.isDel && todo.id == id) {
      return todo.isCompleated == !todo.isCompleated;
    }
  });
  try {
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(400).json("not found");
    }
  } catch {
    res.status(400).json(error);
  }
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const found = todos.find((todo, i) => {
    if (!todo.isDel && todo.id == id) {
      return todo.isDel == true;
    }
  });
  try {
    if (found) {
      res.status(200).json("task is deleted");
    } else {
      res.status(400).json("not found");
    }
  } catch {
    res.status(400).json(error);
  }
};

module.exports = {
  getAlltodos,
  getTodoById,
  getTodoCompleated,
  newTodo,
  ubdateTodo,
  deleteTodo,
};
