import fs from 'fs/promises';
import path from 'path';
import GetProject from './GetProject';

export default async function GetAllProject() {
  const projectDir = path.join(process.cwd(),'/public/projects/')
  
  const ids = await fs.readdir(projectDir);
  const projects = await Promise.all(ids.map((project_id) => GetProject(project_id)));
  
  return projects;
}