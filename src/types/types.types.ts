export interface GreetProps {
  name?: string;
}

export interface SkillsProps {
  skills: string[];
}

export interface Counter {
  count: number;
  increment: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
