import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";
import { vi } from "vitest";

describe("TodoList Component", () => {
    const todos = [
        { id: 1, text: "First Todo" },
        { id: 2, text: "Second Todo" },
    ];

    it("renders TodoList component", () => {
        render(<TodoList todos={todos} />);
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems.length).toBe(2);
    });

    it("displays the correct text for each TodoItem", () => {
        render(<TodoList todos={todos} />);
        expect(screen.getByText("First Todo")).toBeInTheDocument();
        expect(screen.getByText("Second Todo")).toBeInTheDocument();
    });

    it("calls deleteTodo function when a TodoItem delete button is clicked", async () => {
        const mockedDeleteTodo = vi.fn();

        render(<TodoList todos={todos} deleteTodo={mockedDeleteTodo} />);

        const deleteButtons = screen.getAllByText("Delete");
        await fireEvent.click(deleteButtons[0]);

        expect(mockedDeleteTodo).toHaveBeenCalledWith(1);
        expect(mockedDeleteTodo).toHaveBeenCalledTimes(1);
    });
});
