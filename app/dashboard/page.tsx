import { InsertProject } from "@/components/dashboard/InsertProject";
import ProjectsManager from "@/components/dashboard/ProjectsManager";

export default function Dashboard() {
  return (
    <div>
      <InsertProject />
      <ProjectsManager />
    </div>
  )
}
