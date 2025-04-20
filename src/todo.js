import { format, isValid } from "date-fns";

export default class Todo {
  constructor(title) {
    this.title = title;
    this.description = "";
    this.dueDate = null;
    this.priority = "low";
    this.completed = false;
    this.notes = "";
    this.checklist = [];
  }

  taskCompleted() {
    this.completed = true;
  }

  get dueDate() {
    return this._dueDate
      ? format(new Date(this._dueDate), "PPP")
      : "No due date set!";
  }

  set dueDate(date) {
    const convertedDate = new Date(date);

    if (isValid(convertedDate)) {
      this._dueDate = convertedDate;
    } else {
      alert("Please enter a valid date - format YYYY-MM-DD.");
      this._dueDate = null;
    }
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    const priorityStates = ["low", "medium", "high"];
    const priorityLower = priority.toLowerCase();

    if (priorityStates.includes(priorityLower)) {
      this._priority = priorityLower;
    } else {
      alert("Invalid priority! It can only be low, medium or high.");
    }
  }
}
