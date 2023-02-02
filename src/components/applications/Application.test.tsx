import { screen, render } from "@testing-library/react";

import Applications from "./Applications";

describe("Applications", () => {
  test("render by role correctly", () => {
    render(<Applications />);

    // getByRole method should be top preferences from any other method
    const headingH1Element = screen.getByRole<HTMLHeadingElement>("heading", {
      level: 1,
    });
    expect(headingH1Element).toBeInTheDocument();

    const headingH2Element = screen.getByRole<HTMLHeadingElement>("heading", {
      level: 2,
    });
    expect(headingH2Element).toBeInTheDocument();

    const imageElement = screen.getByRole<HTMLImageElement>("img");
    expect(imageElement).toBeInTheDocument();

    const bioInputTextElement = screen.getByRole<HTMLInputElement>("textbox", {
      name: "Bio",
    });
    expect(bioInputTextElement).toBeInTheDocument();

    const selectElement = screen.getByRole<HTMLSelectElement>("combobox");
    expect(selectElement).toBeInTheDocument();

    const buttonElement = screen.getByRole<HTMLButtonElement>("button");
    expect(buttonElement).toBeInTheDocument();

    // const paragraphElement =
    //   screen.getByRole<HTMLParagraphElement>("paragraph");
    // expect(paragraphElement).toBeInTheDocument();

    // const nameInputTextElement = screen.getByRole<HTMLInputElement>("textbox", {
    //   name: "Name",
    // });
    // expect(nameInputTextElement).toBeInTheDocument();

    // const checkElement = screen.getByRole<HTMLInputElement>("checkbox");
    // expect(checkElement).toBeInTheDocument();
  });

  test("render by label text correctly", () => {
    render(<Applications />);

    const nameInputTextElement = screen.getByLabelText<HTMLInputElement>(
      "Name",
      {
        selector: "input",
      }
    );
    expect(nameInputTextElement).toBeInTheDocument();

    const checkElement = screen.getByLabelText<HTMLInputElement>(
      /i agree to the terms and conditions/i
    );
    expect(checkElement).toBeInTheDocument();
  });

  test("render by placeholder text correctly", () => {
    render(<Applications />);

    const namePlaceHolderElement =
      screen.getByPlaceholderText<HTMLInputElement>(/full name/i);
    expect(namePlaceHolderElement).toBeInTheDocument();
  });

  test("render by text correctly", () => {
    render(<Applications />);

    const paragraphElement = screen.getByText<HTMLParagraphElement>(
      /all fields are mandatory/i
    );
    expect(paragraphElement).toBeInTheDocument();
  });

  test("render by display value correctly", () => {
    render(<Applications />);

    const valueInputElement = screen.getByDisplayValue(/hutama/i);
    expect(valueInputElement).toBeInTheDocument();
  });

  test("render by alt-text correctly", () => {
    render(<Applications />);

    const altTextElement = screen.getByAltText(/a person with a laptop/i);
    expect(altTextElement).toBeInTheDocument();
  });

  test("render by title correctly", () => {
    render(<Applications />);

    const closeElement = screen.getByTitle<HTMLSpanElement>(/close/i);
    expect(closeElement).toBeInTheDocument();
  });

  test("render by testid correctly", () => {
    render(<Applications />);

    const testIdElement = screen.getByTestId<HTMLDivElement>(/custom-element/i);
    expect(testIdElement).toBeInTheDocument();
  });
});
