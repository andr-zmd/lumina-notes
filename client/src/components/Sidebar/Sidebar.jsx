import { useState, createContext } from "react";

import NavBar from "./Navbar";
import FileTree from "./FileTree/FileTree";

export const FileTreeContext = createContext(null);

export default function Sidebar() {
  const [isFileTreeOpen, setIsFileTreeOpen] = useState(true);

  return (
    <div className="flex w-auto">
      <FileTreeContext.Provider
        value={{
          isFileTreeOpen: isFileTreeOpen,
          setIsFileTreeOpen: setIsFileTreeOpen,
        }}
      >
        <NavBar />
        {isFileTreeOpen && <FileTree />}
      </FileTreeContext.Provider>
    </div>
  );
}
