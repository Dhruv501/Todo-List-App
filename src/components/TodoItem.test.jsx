import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";
import { vi } from "vitest";

describe("TodoItem Component", () => {
    const todo = { id: 1, text: "Test Todo" };

    it("renders TodoItem component", () => {
        render(<TodoItem todo={todo} />);
        const todoText = screen.getByText("Test Todo");
        expect(todoText).toBeInTheDocument();
    });

    it("displays the correct text", () => {
        render(<TodoItem todo={todo} />);
        const todoText = screen.getByText(todo.text);
        expect(todoText).toBeInTheDocument();
    });

    it("should call deleteTodo when delete button is clicked", async () => {
        const mockedDeleteTodo = vi.fn();

        render(<TodoItem todo={todo} deleteTodo={mockedDeleteTodo} />);

        const deleteButton = screen.getByText("Delete");

        await fireEvent.click(deleteButton);

        expect(mockedDeleteTodo).toHaveBeenCalledWith(todo.id);
        expect(mockedDeleteTodo).toHaveBeenCalledTimes(1);
    });
});
