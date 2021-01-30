import { useRef } from "react";
import { generateId } from "../util/generateId";

export const useUniqueId = () => {
  const id = useRef(generateId());
  return id;
};
