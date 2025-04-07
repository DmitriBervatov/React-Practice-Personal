import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, dely: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, dely);

    return () => {
      clearTimeout(handler);
    };
  }, [value, dely]);

  return debouncedValue;
};

export default useDebounce;
