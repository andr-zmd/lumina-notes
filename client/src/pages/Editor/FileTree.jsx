import { Plus } from "lucide-react";

export default function FileTree() {
  return (
    <div className="flex w-1/5 border-r border-r-zinc-800">
      <div className="w-1/8 border-r border-r-zinc-800"></div>
      <div className="flex w-full flex-col p-2">
        <div className="flex w-full justify-end">
          <button>
            <Plus className="text-white" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
}
