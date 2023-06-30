import { Button } from "@/components/Button";
import ProjectsManager from "@/components/dashboard/ProjectsManager";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <Link href={'/dashboard/new-project'}>
        <Button>New Project</Button>
      </Link>
      <ProjectsManager />
    </div>
  )
}
