import GetAllProjects from "@/util/GetAllProjects";
import { HideStaticProjects } from "./HideStaticProjects";
import { SortableProjects } from "./ClientProjectsShowcase";
import { ProjectDisplay } from "./ProjectDisplay";
import { SortProjectsContext } from "./ProjectsContext";
import SearchBar from "./SearchBar";


export default async function Home() {

  return (
    <main className="">
      <ProjectsShowcase />
    </main>
  )
}

async function ProjectsShowcase() {
  
  const projects = await GetAllProjects();
  return (
    <SortProjectsContext originalProjects={projects}>
      <SearchBar />
      <div className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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


