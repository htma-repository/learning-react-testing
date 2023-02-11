import { useState } from "react";

type InputFormProps = {
  initialState?: {
    name: string;
  };
};

const useInputState = ({
  initialState = { name: "hutama" },
}: InputFormProps = {}) => {
  const [input, setInput] = useState(initialState);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const onInputValue = (value: string) => {
    setInput((prevState) => {
      return { ...prevState, name: value };
    });
  };

  return {
    input,
    setInput,
    onChangeInputHandler,
    onInputValue,
  };
};

export default useInputState;
