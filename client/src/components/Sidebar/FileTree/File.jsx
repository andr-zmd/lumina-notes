import { useState } from "react";

import { ChevronRight } from "lucide-react";

export default function File({ fileData, level }) {
  const [fileName, setFileName] = useState(fileData.name);

  return (
    <button
      style={{ paddingLeft: `${1.7 + 0.5 * level}rem` }}
      className="flex h-7 w-full items-center gap-0.5 text-white hover:bg-zinc-800"
    >
      <div className="h-full w-full text-left">
        <p className="mt-0.5 text-sm">{fileName}</p>
      </div>
    </button>
  );
}
