import { render, screen } from "@testing-library/react";

import { skills } from "../utils/utils";

import Skills from "./Skills";

describe("Skills", () => {
  test("render correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole<HTMLUListElement>("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render skills item correctly", () => {
    render(<Skills skills={skills} />);

    const listItemElement = screen.getAllByRole<HTMLLIElement>("listitem");
    expect(listItemElement).toHaveLength(skills.length);
  });

  test("render login button correctly", () => {
    render(<Skills skills={skills} />);

    const loginButtonElement = screen.getByRole<HTMLButtonElement>("button", {
      name: /login/i,
    });
    expect(loginButtonElement).toBeInTheDocument();
  });

  test("not render start learning", () => {
    render(<Skills skills={skills} />);

    const buttonElement = screen.queryByRole<HTMLButtonElement>("button", {
      name: /start learning/i,
    });
    expect(buttonElement).not.toBeInTheDocument();
  });

  test("render start learning eventually", async () => {
    render(<Skills skills={skills} />);
    // logRoles(view.container);
    // screen.debug();

    const startLearningButton = await screen.findByRole<HTMLButtonElement>(
      "button",
      { name: /start learning/i },
      { timeout: 2000 }
    );
    // logRoles(view.container);
    // screen.debug();

    expect(startLearningButton).toBeInTheDocument();
  });
});
