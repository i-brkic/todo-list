import Todo from "./todo";

export default class Project {
  #todos = [];
  constructor(title) {
    this.title = title;
  }

  addTodo(title) {
    const todo = new Todo(title);
    this.#todos.push(todo);
  }

  getTodos() {
    return [...this.#todos];
  }

  removeTodo(index) {
    this.#todos.splice(index, 1);
  }
}
