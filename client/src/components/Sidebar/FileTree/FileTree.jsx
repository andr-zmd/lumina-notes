import File from "./File";
import Folder from "./Folder";

// TODO: Remove
import hierarchyData from "../../../data/hierarchy.json";
import { useRef, useState } from "react";

export default function FileTree() {
  return (
    <div className="flex flex-col">
      {hierarchyData.map((data) =>
        data.type == "file" ? (
          <File fileData={data} />
        ) : (
          <Folder folderData={data} level={0} />
        ),
      )}
    </div>
  );
}
