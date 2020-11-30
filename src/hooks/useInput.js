import { useState, useCallback } from "react";

export function useInput(init = "") {
  const [value, setValue] = useState(init);

  const handleInput = useCallback(({ target }) => {
    setValue(target.value);
  }, []);

  return [value, handleInput];
}
