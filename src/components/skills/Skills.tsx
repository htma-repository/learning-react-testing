import { useState, useEffect } from "react";
import { SkillsProps } from "../../types/types.types";

export default function Skills({ skills }: SkillsProps) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogin(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const loginHandler = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}> {skill} </li>
        ))}
      </ul>
      {isLogin ? (
        <div>
          <button>Start Learning</button>
        </div>
      ) : (
        <div>
          <button onClick={loginHandler}>Login</button>
        </div>
      )}
    </div>
  );
}
