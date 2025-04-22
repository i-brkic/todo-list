import Todo from "./todo";
import Project from "./project";

const project = new Project("YES");

project.addTodo("BRUH");

console.log(project.getTodos());

project.removeTodo(0);

console.log(project.getTodos());
