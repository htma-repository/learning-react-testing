import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button", { name: /increment/i });
    expect(buttonElement).toBeInTheDocument();
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
});
