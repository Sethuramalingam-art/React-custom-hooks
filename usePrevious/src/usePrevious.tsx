import { useRef, useEffect } from "react";

interface args {
  value: any;
}
const usePrevious = ({ value }: args) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrevious;
