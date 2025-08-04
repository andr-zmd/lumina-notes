import { useState } from "react";

import File from "./File";
import { ChevronRight } from "lucide-react";

export default function Folder({ folderData, level }) {
  const [folderName, setFolderName] = useState(folderData.name);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const toggleFolder = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={toggleFolder}
        style={{ paddingLeft: `${0.5 + 0.5 * level}rem` }}
        className="flex h-7 w-full items-center gap-0.5 text-white hover:bg-zinc-800"
      >
        <ChevronRight
          size={20}
          className={`transition ${isFolderOpen && "rotate-90"}`}
        />
        <div className="h-full w-full text-left">
          <p className="mt-0.5 text-sm">{folderName}</p>
        </div>
      </button>
      {isFolderOpen &&
        folderData.children &&
        folderData.children.map((data) =>
          data.type == "file" ? (
            <File fileData={data} level={level + 1} />
          ) : (
            <Folder folderData={data} level={level + 1} />
          ),
        )}
    </div>
  );
}
