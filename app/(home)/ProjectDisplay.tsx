import { ProjectMetadata } from "@/types/ProjectMetadataType";
import Image from "next/image";
import Link from "next/link";
import ProjectCardLoading from "./ProjectCardLoading";

export function ProjectDisplay(props: {project: ProjectMetadata}) {
  const { project } = props;
  const { id } = project;

  return (
    <div className="w-1/3 shrink-0 p-6">
      <ProjectCardLoading>
      <Link href={`/projects/${id}`}>
        <div className="group h-full p-8 rounded-sm border-red-500 border-opacity-30 bg-gradient-to-bl from-gray-600 to-gray-800 border w-full cursor-pointer hover:scale-[101%] transition-transform">
          <div className="flex flex-col">  
              <h3 className="text-5xl font-bold break-words text-red-300 p-2 pb-6">{project.name}</h3>
              <div className="relative">
                <div className="absolute bg-red-400 w-full h-full bg-opacity-30 group-hover:bg-opacity-0 transition-all duration-500"></div>
                <Image 
                  src={`/projects/${project.id}/thumbnail.jpg`} 
                  className="opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                  width={720}  height={450} alt="thumbnail" 
                />
              </div>
          </div>
          <div className="text-justify mt-4 break-words font-roboto">
            <p>
              {project.shortDescription ?? project.description}
            </p>
          </div>
        </div>
      </Link>
      </ProjectCardLoading>
    </div>
  );
}
