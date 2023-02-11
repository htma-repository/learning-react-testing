import { useState, useEffect } from "react";

interface IUsers {
  firstName: string;
}

export default function UsersName() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
          throw new Error("Error");
        }

        const data: { users: IUsers[] } = await response.json();

        const users = data.users.map((user) => user.firstName);

        setUsers(users);
      } catch (error) {
        if (error instanceof Error) {
          setError("error fetch users data");
        }
      }
    };

    userData();
  }, []);

  return (
    <section>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>;
        })}
      </ul>
    </section>
  );
}
