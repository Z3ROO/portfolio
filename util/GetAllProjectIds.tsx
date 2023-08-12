import fs from 'fs/promises';
import path from 'path';

export default async function GetAllProjectIds() {
  const projectDir = path.join(process.cwd(),'/public/projects/')
  
  const ids = await fs.readdir(projectDir);
  return ids;
}