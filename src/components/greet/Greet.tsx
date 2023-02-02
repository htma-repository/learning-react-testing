import { GreetProps } from "../types/types.types";

export default function Greet({ name }: GreetProps) {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}
