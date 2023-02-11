import { rest } from "msw";

export const handlers = [
  rest.get("https://dummyjson.com/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            firstName: "Hutama",
          },
          {
            firstName: "Tri",
          },
          {
            firstName: "Rahmanto",
          },
        ],
      })
    );
  }),
];
