import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../src/components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle a todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    expect(todo).not.toHaveClass("line-through");
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");
    fireEvent.click(todo);
    expect(todo).not.toHaveClass("line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
