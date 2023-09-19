import GetAllProjects from "./GetAllProjects";

export default async function GetTechnologies() {
  const projects = await GetAllProjects();

  const technologies: Set<string> = new Set();

  for (const project of projects) {
    for (const technology in project.technologies) {
      if (!technologies.has(technology))
        technologies.add(technology);
    }
  }
  
  return technologies;
}