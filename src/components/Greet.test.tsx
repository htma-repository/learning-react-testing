import Greet from "./Greet";
import { render, screen } from "@testing-library/react";

test("show greet with name Hutama", () => {
  render(<Greet />);

  const linkElement = screen.getByText(/hello hutama/i);
  expect(linkElement).toBeInTheDocument();
});

test("show name", () => {
  render(<Greet name="Hutama Trirahmanto" />);

  const linkElement = screen.getByText(/hutama trirahmanto/i);
  expect(linkElement).toBeInTheDocument();
});
