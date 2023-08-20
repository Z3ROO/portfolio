import GetAllProjectIds from "@/util/GetAllProjectIds";
import GetProject from "@/util/GetProject";
import Link from "next/link"
import Image from "next/image";
import ClientBackBTN from "../../../components/clientBackBtn";
import IconList from "../../../components/IconList";
import { Button } from "@/components/Button";
import dynamic from "next/dynamic";

export async function generateStaticParams() {
  const ids = await GetAllProjectIds();

  return ids.map(id => ({ project_id: id }));
}

export default async function ProjectPage({params, asModal}: {params: {project_id: string}, asModal?: boolean}) {
  const project = await GetProject(params.project_id);

  return (
    <div className="relative  w-full h-full overflow-x-hidden">
      <BackButton asModal />
      <div className="w-full h-full overflow-auto  custom-scrollbar flex justify-center overflow-x-hidden">
        <div className="max-w-5xl mt-16 mb-28 w-full h-full">
          <Header project={project} />
          <Hero project={project} />
          <CustomBody project_id={params.project_id} />
        </div>
      </div>
    </div>
  );
}

function BackButton({asModal}: {asModal: boolean}) {
  return (
    <>
      {
        asModal ? (
          <ClientBackBTN />
        ) : (
        <Link className="absolute top-4 left-4" href={'/'}>
          <Button className="">Back</Button>
        </Link>
        )
      }
    </>
  )
}

function Header({project} : { project: any}) {
  return (
    <div className="flex items-center">
      <h1 className="font-bold text-5xl px-4 py-8 text-red-300">
        {project.name}
      </h1>
      <Link href={project.links.github} target="_blank">
        <Button className="mx-4 my-8">Github</Button>
      </Link>
      <Link href={project.links.demo} target="_blank">
        <Button className="mx-4 my-8">Demo</Button>
      </Link>
    </div>
  )
}

function Hero({project}: { project: any}) {
  return (
      <>
        <div className="w-full p-4 bg-gray-900 relative">
          <div className="relative z-10">
            <Image src={`/projects/${project.id}/demo.jpg`} width={500}  height={500} alt="demo"/>
            <div className="flex flex-wrap content-start p-4">
              <IconList technologies={project.technologies} />
            </div>
          </div>
          <div className="w-screen h-full bg-gray-900 absolute top-0 -left-64 z-0"/>
        </div>
        <pre className="pt-8 pb-16 text-xl">
          <p className="whitespace-pre-wrap">{project.description}</p>
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
        component = NoCustomBody;
      }

      return component;
    });

  return <CustomBodyComponent />
}


function NoCustomBody () {
  return null
}
