import { useContext } from "react";
import {
  Settings,
  UserRound,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import { FileTreeContext } from "./Sidebar";

export default function NavBar() {
  const fileTree = useContext(FileTreeContext);

  function toggleFileTree() {
    fileTree.setIsFileTreeOpen((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col items-center justify-between gap-2 border-r border-r-zinc-800 p-2">
      <div className="flex flex-col gap-2">
        {fileTree.isFileTreeOpen ? (
          <PanelLeftClose onClick={toggleFileTree} color="white" size={20} />
        ) : (
          <PanelLeftOpen onClick={toggleFileTree} color="white" size={20} />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <UserRound color="white" size={20} />
        <Settings color="white" size={20} />
      </div>
    </div>
  );
}
