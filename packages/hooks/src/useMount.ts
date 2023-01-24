import { useEffect } from "react";

export const useMount = (fn: () => void | (() => void)) => {
  return useEffect(fn, []);
};
