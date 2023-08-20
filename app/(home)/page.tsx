import Image from "next/image";
import Link from "next/link";

import GetAllProjectIds from "@/util/GetAllProjectIds";
import GetProject from "@/util/GetProject";

export default async function Home() {
  return (
    <main className="flex flex-col items-center h-[calc(100vh-7rem)]">
      <SortingSection />
      <ProjectsShowcase />
    </main>
  )
}

async function ProjectsShowcase() {
  const ids = await GetAllProjectIds();
  
  return (
    <div className="flex w-10/12 flex-wrap overflow-auto custom-scrollbar">
      {
        ids.map(id => {
          return <ProjectDisplay key={id} id={id}/>
        })
      }
    </div>
  );
}

async function ProjectDisplay(props: {id: string}) {
  const { id } = props;
  const project = await GetProject(id);

  return (
    <div className="w-1/2 shrink-0 p-4">
      <Link href={`/projects/${id}`}>
        <div className="h-full p-6 rounded-sm border-red-500 border-opacity-30 bg-gradient-to-bl from-gray-600 to-gray-800 border w-full cursor-pointer hover:scale-[101%] transition-transform">
          <div className="flex">
            <div className="w-3/5 bg-gray-900 h-40 shrink-0">
              <Image src={`/projects/${project.id}/thumbnail.jpg`} width={500}  height={500} alt="thumbnail" />
            </div>
            <div className="w-2/5 p-2">
              <h3 className="text-5xl font-bold break-words text-red-300">{project.name}</h3>
            </div>
          </div>
          <div className="text-justify mt-4 break-words">{project.shortDescription ?? project.description}</div>
        </div>
      </Link>
    </div>
  );
}

function SortingSection() {
  return (
    <div className="flex w-10/12 justify-end px-4 py-2">
      <div className="flex justify-between w-48 self-end mr-8">
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Complexity</span>
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Difficulty</span>
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Size</span>
      </div>
      <input className="w-72 h-8 px-2 py-1 rounded-sm shadow-inner shadow-[#0000002f] border border-opacity-30 hover:border-opacity-50 focus:border-opacity-75 outline-none border-red-500 bg-gray-800 focus:bg-gray-700 transition-all" />
    </div>
  )
}
