import { Settings, UserRound, PanelLeftClose } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex w-1/6 flex-col items-center justify-between gap-2 border-r border-r-zinc-800 p-2">
      <div>
        <PanelLeftClose color="white" size={20} />
      </div>
      <div className="flex flex-col gap-2">
        <Settings color="white" size={20} />
        <UserRound color="white" size={20} />
      </div>
    </div>
  );
}
