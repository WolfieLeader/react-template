import { useState } from "react";

const useToggle = (defualtValue = false) => {
  const [value, setValue] = useState(defualtValue);
  const toggle = (newValue?: boolean) => {
    setValue((preValue) => newValue ?? !preValue);
  };
  return [value, toggle] as const;
};
export default useToggle;
