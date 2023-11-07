import GetAllProjects from "@/util/GetAllProjects";
import { ProjectDisplay } from "./ProjectDisplay";
import { SortProjectsContext } from "./ProjectsContext";
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
    <SortProjectsContext>
      <SectionTitle>Projects</SectionTitle>
      <div className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">

          {
            projects.map(project => {
              return <ProjectDisplay key={project.id} project={project}/>
            })
          }

        </div>
      </div>
    </SortProjectsContext>
  );
}


