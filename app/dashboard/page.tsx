import { InsertProject } from "./InsertProject";
import ProjectsManager from "./ProjectsManager";

export default function Dashboard() {
  return (
    <div>
      <InsertProject />
      <ProjectsManager />
    </div>
  )
}
