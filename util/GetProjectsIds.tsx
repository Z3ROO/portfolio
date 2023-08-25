import fs from 'fs/promises';
import path from 'path';

export default async function GetProjectsIds(): Promise<string[]> {
  const projectDir = path.join(process.cwd(),'/public/projects/')
  
  const ids = await fs.readdir(projectDir);
  
  return ids;
}