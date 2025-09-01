import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../src/components/TodoList";

describe("TodoList Component", () => {
  // Initial render test
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React").closest("li")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App").closest("li")).toBeInTheDocument();
    expect(screen.getByText("Write Tests").closest("li")).toBeInTheDocument();
  });

  // Add todo test
  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo").closest("li")).toBeInTheDocument();
  });

  // Toggle completion test
  test("can toggle a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React").closest("li");

    expect(todo).not.toHaveClass("line-through");
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
    fireEvent.click(todo);
    expect(todo).not.toHaveClass("line-through");
  });

  // Delete todo test
  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React").closest("li");
    const deleteButton = todo.querySelector("button");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
