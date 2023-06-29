import ProjectsRepo from "@/lib/repository/ProjectsRepo";
import ProjectsManagerItem from "./ProjectsManagerItem";

export default async function ProjectsManager() {
  const projects = await ProjectsRepo.getAll();
  return (
    <div className="flex flex-col p-4">
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
