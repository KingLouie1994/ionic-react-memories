import React from "react";

export interface Memory {
  id: string;
  base64Url: string;
  path: string;
  title: string;
  type: "good" | "bad";
}

const MemoriesContext = React.createContext<{
  memories: Memory[];
  addMemory: (
    path: string,
    base64Data: string,
    title: string,
    type: "good" | "bad"
  ) => void;
}>({
  memories: [],
  addMemory: () => {},
});

export default MemoriesContext;
