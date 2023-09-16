import GetAllProjects from "@/util/GetAllProjects";
import { ProjectMetadata } from "@/types/ProjectMetadataType";
import { HideStaticProjects } from "./HideStaticProjects";
import { SortableProjects } from "./ClientProjectsShowcase";
import { ProjectDisplay } from "./ProjectDisplay";


export default async function Home() {
  const projects = await GetAllProjects();

  return (
    <main className="flex flex-col items-center h-[calc(100vh-10rem)]">
      <ProjectsShowcase projects={projects} />
    </main>
  )
}

async function ProjectsShowcase({projects}: { projects: ProjectMetadata[]}) {
  
  return (
    <div className="flex w-10/12 flex-wrap pb-24">
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


