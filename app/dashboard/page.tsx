import ProjectsManager from "@/components/dashboard/ProjectsManager";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dashboard() {
  return (
    <div>
      <Link href={'/dashboard/new-project'}>
        <button className="px-2 py-1 border border-white">New Project</button>
      </Link>
      <ProjectsManager />
    </div>
  )
}
