import { Plus } from "lucide-react";

import NavBar from "./Navbar";
import FileTree from "./FileTree/FileTree";

export default function Sidebar() {
  return (
    <div className="flex w-1/6 border-r border-r-zinc-800">
      <NavBar />
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full justify-end">
          <button>
            <Plus className="text-white" />
          </button>
        </div>
        <FileTree />
      </div>
    </div>
  );
}
