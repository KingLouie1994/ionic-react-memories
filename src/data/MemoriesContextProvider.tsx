import React, { useState, useEffect, useCallback } from "react";
import { FilesystemDirectory, Plugins } from "@capacitor/core";

import MemoriesContext, { Memory } from "./memories-context";

const { Storage, Filesystem } = Plugins;

const MemoriesContextProvider: React.FC = (props) => {
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    const storableMemories = memories.map((memory) => {
      return {
        id: memory.id,
        title: memory.title,
        path: memory.path,
        type: memory.type,
      };
    });
    Storage.set({ key: "memories", value: JSON.stringify(storableMemories) });
  }, [memories]);

  const addMemory = (
    path: string,
    base64Data: string,
    title: string,
    type: "good" | "bad"
  ) => {
    const newMemory: Memory = {
      id: Math.random().toString(),
      title,
      base64Url: base64Data,
      type,
      path,
    };
    setMemories((currentMemories) => {
      return [...currentMemories, newMemory];
    });
  };

  const initContext = useCallback(async () => {
    const memoriesData = await Storage.get({ key: "memories" });
    const storedMemories = memoriesData.value
      ? JSON.parse(memoriesData.value)
      : [];
    const loadedMemories: Memory[] = [];
    for (const storedMemory of storedMemories) {
      const file = await Filesystem.readFile({
        path: storedMemory.path,
        directory: FilesystemDirectory.Data,
      });
      loadedMemories.push({
        id: storedMemory.id,
        title: storedMemory.title,
        type: storedMemory.type,
        path: storedMemory.path,
        base64Url: "data:image/jpeg;base64," + file.data,
      });
    }
    setMemories(loadedMemories);
  }, []);

  return (
    <MemoriesContext.Provider
      value={{
        memories,
        addMemory,
        initContext,
      }}
    >
      {props.children}
    </MemoriesContext.Provider>
  );
};

export default MemoriesContextProvider;
