import GetAllProjects from "@/util/GetAllProjects";
import { SortingSection } from "./SortingSection";
import { SortProjectsContext } from "./ProjectsContext";
import { ProjectMetadata } from "@/types/ProjectMetadataType";
import { HideStaticProjects } from "./HideStaticProjects";
import { SortableProjects } from "./ClientProjectsShowcase";
import { ProjectDisplay } from "./ProjectDisplay";

export default async function Home() {
  const projects = await GetAllProjects();

  return (
    <main className="flex flex-col items-center h-[calc(100vh-7rem)]">
      <SortProjectsContext originalProjects={projects}>
        <SortingSection />
        <ProjectsShowcase projects={projects} />
      </SortProjectsContext>
    </main>
  )
}

async function ProjectsShowcase({projects}: { projects: ProjectMetadata[]}) {
  
  return (
    <div className="flex w-10/12 flex-wrap overflow-auto custom-scrollbar">
      <HideStaticProjects>
        {
          projects.map(project => {
            return <ProjectDisplay key={project.id} project={project}/>
          })
        }
      </HideStaticProjects>
      <SortableProjects />
    </div>
  );
}


