import { useRef, useState } from "react";
import { Plus } from "lucide-react";

import File from "./File";
import Folder from "./Folder";

// TODO: Remove
import hierarchyData from "../../../data/hierarchy.json";

export default function FileTree() {
  return (
    <div className="flex w-60 flex-col border-r border-r-zinc-800">
      <div className="flex w-full items-center justify-end p-2">
        <button>
          <Plus color="white" size={20} />
        </button>
      </div>
      <div className="flex flex-col">
        {hierarchyData.map((data) =>
          data.type == "file" ? (
            <File fileData={data} level={0} />
          ) : (
            <Folder folderData={data} level={0} />
          ),
        )}
      </div>
    </div>
  );
}
