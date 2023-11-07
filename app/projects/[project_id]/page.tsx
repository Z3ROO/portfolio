import GetProjectsIds from "@/util/GetProjectsIds";
import Link from "next/link";
import Image from "next/image";
import IconList from "../../../components/IconList";
import { Button } from "@/components/Button";
import dynamic from "next/dynamic";
import GetProject from "@/util/GetProject";
import { ProjectMetadata } from "@/types/ProjectMetadataType";
import { IconButton } from '@/components/IconButton';
import { LastCommitTag } from "@/components/project/LastCommitTag";

export async function generateStaticParams() {
  const projects = await GetProjectsIds();
  //IS THIS REALLY WORKING
  // NO ITS NOT WORKING!!!

  // MUST FIX THIS!!!!!!

  // ############################################
  // ######################################
  return projects.map(project_id => ({project_id}));
}

export default async function ProjectPage({params, asModal}: {params: {project: any, project_id: string}, asModal?: boolean}) {
  const project = await GetProject(params.project_id);

  return (
    <div className="relative w-full h-full overflow-x-hidden">
      {
        !asModal && (
          <div className="absolute top-4 left-4 z-20 ">
            <Link className="absolute top-4 left-4" href={'/'}>
              <Button className="">Back</Button>
            </Link>
          </div>
        )
      }
      <div className="w-full h-full overflow-auto  custom-scrollbar flex justify-center overflow-x-hidden">
        <div className="max-w-5xl w-full flex flex-col">
          <div className="pt-16 pb-20">
            <Header project={project} />
            <Hero {...{project, asModal}} />
            <CustomBody project_id={project.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({project} : { project: ProjectMetadata}) {
  const { github, demo, npm } = project.links;
  
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-5xl px-4 py-8 mr-12 text-red-300">
        {project.name}
      </h1>
        <IconButton href={github} target="_blank" icon='github' className="mx-2">Github</IconButton>
      {
        demo &&
        <IconButton href={demo} target="_blank" icon='browser' className="mx-2">Demo</IconButton>
      }
      {
        npm &&
        <IconButton href={npm} target="_blank" icon='npm' className="mx-2"></IconButton>
      }
    </div>
  )
}

function Hero({project, asModal}: { project: ProjectMetadata, asModal: boolean|undefined}) {

  return (
      <>
        <div className="w-full p-4 bg-gray-900 relative">
          <div className="relative z-10">
            <LastCommitTag repository_name={project.id} />
            <Image src={`/projects/${project.id}/hero.jpg`} width={1080}  height={675} alt="hero"/>
            <div className="flex flex-wrap content-start p-4">
              <IconList technologies={project.technologies} />
            </div>
          </div>
          <div className={`w-screen h-full ${asModal ? 'bg-gray-900' : 'bg-gray-800'} absolute top-0 -left-64 z-0`} />
        </div>
        <pre className="pt-8 pb-16 text-2xl">
          <p className="whitespace-pre-wrap text-justify">{project.description}</p>
        </pre>
      </>
  )
}

async function CustomBody({project_id}: {project_id: string}) {
  const CustomBodyComponent = dynamic(async () => {
      let component: any;
      
      try {
        component = await import(`../(projects-custom-body)/${project_id}`)
      }
      catch(err) {
        component = () => null;
      }

      return component;
    });

  return <CustomBodyComponent />
}
