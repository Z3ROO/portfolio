import GetAllProjectIds from "@/util/GetAllProjectIds";
import GetProject from "@/util/GetProject";
import Link from "next/link"
import Image from "next/image";
import ClientBackBTN from "./clientBackBtn";

export async function generateStaticParams() {
  const ids = await GetAllProjectIds();

  return ids.map(id => ({ project_id: id }));
}

export default async function ProjectPage({params, asModal}: {params: {project_id: string}, asModal?: boolean}) {
  const project = await GetProject(params.project_id);

  return (
    <div className="relative flex justify-center w-full h-full">
      {
        asModal ? (
          <ClientBackBTN />
        ) : (
        <Link className="absolute top-4 left-4" href={'/'}>
          <button className="px-1 py-2 rounded-sm border border-white">Back</button>
        </Link>
        )
      } 
      <div className="max-w-5xl mt-16">
        <h1 className="font-bold text-5xl">{project.name}</h1>
        <div className="w-full p-8">
          <Image src={`/projects/${project.id}/demo.jpg`} width={500}  height={500} alt="demo"/>
        </div>
        <pre>
          <p>{project.description}</p>
        </pre>
      </div>
    </div>
  );
}