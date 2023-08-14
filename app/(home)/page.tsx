import Image from "next/image";
import Link from "next/link";

import GetAllProjectIds from "@/util/GetAllProjectIds";
import GetProject from "@/util/GetProject";


export default async function Home() {

  return (
    <main className="">
      <ProjectsShowcase />
    </main>
  )
}


async function ProjectsShowcase() {
  const ids = await GetAllProjectIds();
  
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-10/12 justify-between px-4 py-2">
        <div className="flex justify-between w-64">
          <span>Complexity</span>
          <span>Difficulty</span>
          <span>Size</span>
        </div>
        <input className="w-72 h-8 rounded-sm shadow-inner" />
      </div>
      <div className="flex w-10/12 flex-wrap">
        {ids.map(id => {
          return <ProjectDisplay key={id} id={id}/>
        })}
      </div>
    </div>
  );
}

async function ProjectDisplay(props: {id: string}) {
  const { id } = props;
  const project = await GetProject(id);

  return (
    <div className="w-1/2 shrink-0 p-4">
      <Link href={`/projects/${id}`}>
        <div className="p-6 rounded-sm border-white border w-full cursor-pointer hover:scale-[101%] transition-transform">
          <div className="flex">
            <div className="w-3/5 bg-gray-900 h-40 shrink-0">
              <Image src={`/projects/${project.id}/demo.jpg`} width={500}  height={500} alt="demo" />
            </div>
            <div className="w-2/5 p-2">
              <h3 className="text-5xl font-bold break-words">{project.name}</h3>
            </div>
          </div>
          <div className="text-justify mt-4 break-words">{project.shortDescription ?? project.description}</div>
        </div>
      </Link>
    </div>
  );
}

