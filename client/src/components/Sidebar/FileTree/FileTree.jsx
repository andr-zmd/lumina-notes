import File from "./File";
import Folder from "./Folder";

export default function FileTree() {
  return (
    <div className="flex flex-col">
      <File initialFileName="English" />
      <File initialFileName="Calculus" />
    </div>
  );
}
