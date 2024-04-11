import api from "../../config/api";

async function createNewUser(newUserId, newUserName, newUserEmail, newUserPassword) {
  const result = await api.post("/user/create", {
    newUserId: newUserId,
   newUserName:newUserName,
   newUserEmail:newUserEmail,
   newUserPassword:newUserPassword
  });

  const newUser = result.data.id;

  return newUser;
}

async function markTodo(todoId, isDone) {
  const result = await api.put("/todos/mark", {
    todoId: todoId,
    newIsDone: isDone,
  });

  const todo = result.data.updatedTodo;

  return todo;
}

async function updateTodo(updateId, updateTask, updateIsDone, updateDueDate) {
  const result = await api.put("/todos/update", {
    todoId: updateId,
    newTask: updateTask,
    newIsDone: updateIsDone,
    newDueDate: updateDueDate,
  });

  const todo = result.data.updatedTodo;

  return todo;
}

async function deleteTodo(todoId) {
  const result = await api.delete("/todos/delete", {
    data: { todoId },
  });

  const deletedTodoId = result.data.deletedTodosId;

  return deletedTodoId;
}

export default { createNewUser, }