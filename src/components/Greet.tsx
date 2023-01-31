interface GreetProps {
  name?: string;
}

export default function Greet({ name }: GreetProps) {
  return (
    <div>
      <h1>Hello Hutama</h1>
      <h1>{name}</h1>
    </div>
  );
}
