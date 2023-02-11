import { renderHook, act } from "@testing-library/react";

import useInputState from "./useInputState";

describe("useInputState", () => {
  test("render initial value", () => {
    const { result } = renderHook(useInputState);
    expect(result.current.input).toStrictEqual({ name: "hutama" });
  });

  test("should accept and render the same initial value", () => {
    const { result } = renderHook(useInputState, {
      initialProps: {
        initialState: { name: "Trirahmanto" },
      },
    });

    expect(result.current.input).toStrictEqual({ name: "Trirahmanto" });
  });

  test("render change Input value", () => {
    const { result } = renderHook(useInputState);
    act(() => result.current.onInputValue("Hutama"));
    expect(result.current.input).toStrictEqual({ name: "Hutama" });
  });
});
