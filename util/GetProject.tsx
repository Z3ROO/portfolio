import fs from 'fs/promises';
import path from 'path';

export default async function GetProject(project_id: string) {
  const projectDir = path.join(process.cwd(), '/public/projects/', project_id)
  const rawMetadata = await fs.readFile(path.join(projectDir, 'metadata.json'), {encoding: 'utf-8'});
  const metadata = JSON.parse(rawMetadata);

  const description = await fs.readFile(path.join(projectDir, 'description.txt'), {encoding: 'utf-8'});

  return {
    ...metadata,
    description
  }

}
