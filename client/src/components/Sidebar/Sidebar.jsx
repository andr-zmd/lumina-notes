import { Plus } from "lucide-react";

import NavBar from "./Navbar";
import FileTree from "./FileTree/FileTree";

export default function Sidebar() {
  return (
    <div className="flex w-1/6 border-r border-r-zinc-800">
      <NavBar />
      <div className="flex w-full flex-col">
        <div className="flex w-full items-center justify-end p-2">
          <button>
            <Plus color="white" size={20} />
          </button>
        </div>
        <FileTree />
      </div>
    </div>
  );
}
