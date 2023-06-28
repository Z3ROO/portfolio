import ProjectsRepo from "@/lib/repository/ProjectsRepo";
import Project from "./Project";


export default async function Projects() {
  const projects = await ProjectsRepo.getAll();
  return (
    <div className="flex flex-col p-4">
      {
        projects.map(
          project => (<Project key={project._id.toString()} {...project} _id={project._id.toHexString()} />)
        )
      }
    </div>
  );
}
