import Applications from "./components/applications/Applications";
import Skills from "./components/skills/Skills";
import Counter from "./components/counter/Counter";
import UsersName from "./components/mockingHttp/UsersName";

import { skills } from "./components/utils/utils";

import "./App.css";

function App() {
  return (
    <>
      <Applications />
      <Skills skills={skills} />
      <Counter />
      <UsersName />
    </>
  );
}

export default App;
