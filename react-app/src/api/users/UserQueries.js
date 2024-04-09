import api from "../../config/api";

async function fetchAllTodos() {
  const result = await api.get("/todos/all");

  const todos = result.data;

  return todos;
}

async function fetchTodoById(todoId) {
  const result = await api.get("/todos/byid", { params: { todoId } });

  const todo = result.data.todo;

  console.log("Mein Todo /byid", todo);

  return todo;
}

export default { fetchAllTodos, fetchTodoById };