import ProjectsRepo from "@/lib/repository/ProjectsRepo";
import ProjectsManagerItem from "./ProjectsManagerItem";
import Link from "next/link";
import { Button } from "../Button";

export default async function ProjectsManager() {
  const projects = await ProjectsRepo.getAll();
  return (
    <div className="flex flex-col p-4">
      <div className="p-2">
        <h2 className="text-2xl font-bold inline pr-2 align-bottom">Projects: </h2>
        <Link href={'/dashboard/new-project'}>
          <Button className="text-sm align-bottom">New Project</Button>
        </Link>
      </div>
      {
        projects.map(
          project => (
            <ProjectsManagerItem key={project._id.toString()} {...project} _id={project._id.toHexString()} />
          )
        )
      }
    </div>
  );
}
