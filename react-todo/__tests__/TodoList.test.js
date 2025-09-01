import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../src/components/TodoList"; // adjust path if needed
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  // Initial render test
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  // Adding todos
  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  // Toggling todos
  test("can toggle a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveClass("line-through");

    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");

    fireEvent.click(todo);
    expect(todo).not.toHaveClass("line-through");
  });

  // Deleting todos
  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling; // Delete button
    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});
