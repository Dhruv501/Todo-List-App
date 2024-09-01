import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";
import { vi } from "vitest";

describe("Todo Form", () => {
    it("renders TodoForm component", () => {
        render(<TodoForm />);
    })

    it("shows input filed is empty at first", () => {
        const { getByTestId } = render(<TodoForm />);
        const inputField = getByTestId("inputbox");
        expect(inputField.value).toBe("");
    })

    it("should not call add method if input field is empty", async () => {
        const mockedAdd = vi.fn();

        const { getByTestId, getByRole } = render(<TodoForm addTodo={mockedAdd} />);

        const inputField = getByTestId("inputbox");
        const addBtn = getByRole("button", {name: "Add Todo"});

        expect(inputField.value).toBe("");

        await fireEvent.click(addBtn);
        expect(mockedAdd).not.toHaveBeenCalled();
    })

    it("should call add method if input field is not empty", async () => {
        const mockedAdd = vi.fn();

        const { getByTestId, getByRole } = render(<TodoForm addTodo={mockedAdd} />);

        const inputField = getByTestId("inputbox");
        const addBtn = getByRole("button", {name: "Add Todo"});

        expect(inputField.value).toBe("");

        fireEvent.change(inputField, { target: { value: "todo item" } })
        await fireEvent.click(addBtn);
        expect(mockedAdd).toHaveBeenCalledTimes(1);
    })
});
