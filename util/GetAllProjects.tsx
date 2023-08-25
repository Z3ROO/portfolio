import GetProject from './GetProject';
import GetProjectsIds from './GetProjectsIds';

export default async function GetAllProject() {  
  const ids = await GetProjectsIds();
  const projects = await Promise.all(ids.map((project_id) => GetProject(project_id)));
  
  return projects;
}