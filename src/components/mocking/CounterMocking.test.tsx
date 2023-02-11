import userEvent from "@testing-library/user-event";

import { render, RenderOptions, screen } from "../../test-utils";
import CounterMocking from "./CounterMocking";

function userEventSetup(jsx: React.ReactElement, options?: RenderOptions) {
  return {
    user: userEvent.setup(),
    ...render(jsx, options),
  };
}

describe("Counter Mocking Test", () => {
  test("render correctly", () => {
    render(<CounterMocking count="10" />);

    const headingElement = screen.getByRole("heading", {
      name: /counter mocking/i,
    });
    const countElement = screen.getByText("10");

    expect(headingElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
  });

  test("render mocking function", async () => {
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    const { user } = userEventSetup(
      <CounterMocking
        count="10"
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    );

    const incrementButtonElement = screen.getByRole("button", {
      name: /increment/i,
    });

    const decrementButtonElement = screen.getByRole("button", {
      name: /decrement/i,
    });

    await user.click(incrementButtonElement);
    await user.click(decrementButtonElement);

    expect(incrementHandler).toBeCalledTimes(1);
    expect(decrementHandler).toBeCalledTimes(1);
  });
});
