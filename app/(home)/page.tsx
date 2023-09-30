import GetAllProjects from "@/util/GetAllProjects";
import { HideStaticProjects } from "./HideStaticProjects";
import { SortableProjects } from "./ClientProjectsShowcase";
import { ProjectDisplay } from "./ProjectDisplay";
import { SortProjectsContext } from "./ProjectsContext";
import SearchBar from "./SearchBar";


export default async function Home() {

  return (
    <main className="flex flex-col items-center">
      <ProjectsShowcase />
    </main>
  )
}

async function ProjectsShowcase() {
  
  const projects = await GetAllProjects();
  return (
    <SortProjectsContext originalProjects={projects}>
      <SearchBar />
      <div className="flex pb-24 max-w-6xl justify-center">
        <div className="flex flex-wrap">
          <HideStaticProjects>
            {
              projects.map(project => {
                return <ProjectDisplay key={project.id} project={project}/>
              })
            }
          </HideStaticProjects>
          <SortableProjects />
        </div>
      </div>
    </SortProjectsContext>
  );
}


