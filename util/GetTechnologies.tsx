import { ProjectMetadata } from "@/types/ProjectMetadataType";
import GetAllProjects from "./GetAllProjects";

export default async function GetTechnologies() {
  const projects = await GetAllProjects();
  
  return KeepUniqueTechnologies(projects);
}

export function KeepUniqueTechnologies(projects: ProjectMetadata[]) {
  const technologies: Set<string> = new Set();

  for (const project of projects) {
    for (const technology in project.technologies) {
      if (!technologies.has(technology))
        technologies.add(technology);
    }
  }

  return technologies;
}