import { render, screen } from "@testing-library/react";

import { rest } from "msw";
import { server } from "../../mocks/server";

import UsersName from "./UsersName";

describe("Fetching Users", () => {
  test("render correctly", () => {
    render(<UsersName />);

    const headingElement = screen.getByRole("heading", { name: /users/i });

    expect(headingElement).toBeInTheDocument();
  });

  test("render list users", async () => {
    render(<UsersName />);
    const listUsersElement = await screen.findAllByRole("listitem");

    expect(listUsersElement).toHaveLength(3);
  });

  test("render error if list users failed fetching", async () => {
    server.use(
      rest.get("https://dummyjson.com/users", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<UsersName />);

    const errorElement = await screen.findByText(/error fetch users data/i);
    expect(errorElement).toBeInTheDocument();
  });
});
