import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React").closest("li")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App").closest("li")).toBeInTheDocument();
    expect(screen.getByText("Write Tests").closest("li")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a new todo...");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write tests").closest("li")).toBeInTheDocument();
  });

  test("can toggle a todo completion", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");
    const todoItem = todoText.closest("li"); // select the parent <li>

    // Initially not completed
    expect(todoItem).not.toHaveClass("line-through");

    // Click to complete
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("line-through");

    // Click again to un-complete
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveClass("line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todoText = screen.getByText("Learn React");
    const todoItem = todoText.closest("li");

    const deleteButton = todoItem.querySelector("button");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
