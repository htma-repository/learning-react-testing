import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  test("show greet", () => {
    render(<Greet />);

    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("show greet with name", () => {
    render(<Greet name="Hutama Trirahmanto" />);

    const linkElement = screen.getByText(/hutama trirahmanto/i);
    expect(linkElement).toBeInTheDocument();
  });
});
