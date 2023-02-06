import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementElement = screen.getByRole("button", { name: /increment/i });
    expect(incrementElement).toBeInTheDocument();

    const setNumberElement = screen.getByRole("button", {
      name: /set number/i,
    });
    expect(setNumberElement).toBeInTheDocument();

    const resetElement = screen.getByRole("button", { name: /reset/i });
    expect(resetElement).toBeInTheDocument();

    const inputElement = screen.getByRole("spinbutton");
    expect(inputElement).toBeInTheDocument();
  });

  function userEventSetup(jsx: React.ReactElement) {
    return {
      user: userEvent.setup(),
      ...render(jsx),
    };
  }

  test("increment to 1 if button click one time", async () => {
    // const user = userEvent.setup();
    // render(<Counter />);

    const { user } = userEventSetup(<Counter />);

    const countElement = screen.getByRole("heading");
    const buttonElement = screen.getByRole("button", {
      name: /increment/i,
    });

    await user.click(buttonElement);
    expect(countElement).toHaveTextContent("1");
  });

  test("add 10 to count if set number 10", async () => {
    const { user } = userEventSetup(<Counter />);

    const setNumberElement = screen.getByRole("button", {
      name: /set number/i,
    });
    const countElement = screen.getByRole("heading");
    const amountInputElement = screen.getByRole("spinbutton");

    await user.type(amountInputElement, "10");
    expect(amountInputElement).toHaveValue(10);

    await user.click(setNumberElement);
    expect(countElement).toHaveTextContent("10");
  });

  test("element focused in the right order", async () => {
    const { user } = userEventSetup(<Counter />);

    const incrementElement = screen.getByRole("button", {
      name: /increment/i,
    });
    const inputElement = screen.getByRole("spinbutton");
    const setNumberElement = screen.getByRole("button", {
      name: /set number/i,
    });
    const resetElement = screen.getByRole("button", { name: /reset/i });

    const userTab = async (element: HTMLElement) => {
      await user.tab();
      expect(element).toHaveFocus();
    };

    // await user.tab();
    // expect(incrementElement).toHaveFocus();
    // await user.tab();
    // expect(inputElement).toHaveFocus();
    // await user.tab();
    // expect(setNumberElement).toHaveFocus();

    await userTab(incrementElement);
    await userTab(inputElement);
    await userTab(setNumberElement);
    await userTab(resetElement);
  });
});
