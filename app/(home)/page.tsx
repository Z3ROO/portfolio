import GetAllProjects from "@/util/GetAllProjects";
import { HideStaticProjects } from "./HideStaticProjects";
import { SortableProjects } from "./ClientProjectsShowcase";
import { ProjectDisplay } from "./ProjectDisplay";
import { SortProjectsContext } from "./ProjectsContext";
import SearchBar from "./SearchBar";
import Hero from "./Hero";
import SkillSet from "./SkillSet";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";


export default async function Home() {

  return (
    <main className="">
      <Hero />
      <SkillSet />
      <ProjectsShowcase />
      <Image className="construction-sign w-24" src="/construction-sign.png" width={572} height={1201} alt="under construction" />
    </main>
  )
}

async function ProjectsShowcase() {
  
  const projects = await GetAllProjects();
  return (
    <SortProjectsContext originalProjects={projects}>
      <SectionTitle>Projects</SectionTitle>
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


