import { useState } from "react";

import { ChevronRight } from "lucide-react";

export default function File({ fileData, level }) {
  const [fileName, setFileName] = useState(fileData.name);

  return (
    <button className="flex h-7 items-center gap-1 pl-[1.7rem] text-white hover:bg-zinc-800">
      <div
        style={{ paddingLeft: `${0 + 0.5 * level}rem` }}
        className="h-full w-full text-left"
      >
        <p className="mt-0.5 text-sm">{fileName}</p>
      </div>
    </button>
  );
}
