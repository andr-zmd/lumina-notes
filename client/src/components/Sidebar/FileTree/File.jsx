import { useState } from "react";

import { ChevronRight } from "lucide-react";

export default function File({ initialFileName }) {
  const [fileName, setFileName] = useState(initialFileName);

  return (
    <button className="flex h-7 items-center gap-1 rounded-md p-0.5 text-white hover:bg-zinc-800">
      <ChevronRight size={20} className="" />
      <div className="h-full w-full text-left">
        <p className="mt-0.5 text-sm">{fileName}</p>
      </div>
    </button>
  );
}
