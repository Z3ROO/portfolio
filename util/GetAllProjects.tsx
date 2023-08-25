import GetProject from './GetProject';
import GetProjectsIds from './GetProjectsIds';
import { ProjectMetadata } from './ProjectMetadataType';

export default async function GetAllProject(): Promise<ProjectMetadata[]> {  
  const ids = await GetProjectsIds();
  const projects = await Promise.all(ids.map((project_id) => GetProject(project_id)));
  
  projects.sort((a: ProjectMetadata, b: ProjectMetadata) => {
    return a.priority - b.priority
  });

  return projects;
}