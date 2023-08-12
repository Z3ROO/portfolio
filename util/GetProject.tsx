import fs from 'fs/promises';
import path from 'path';

export default async function GetProject(project_id: string) {
  const projectDir = path.join(process.cwd(), '/public/projects/', project_id)
  const rawMetadata = await fs.readFile(path.join(projectDir, 'metadata.json'), {encoding: 'utf-8'});
  const metadata = JSON.parse(rawMetadata);

  const rawDescription = await fs.readFile(path.join(projectDir, 'description.md'), {encoding: 'utf-8'});
  const description = mdParse(rawDescription);

  return {
    ...metadata,
    description
  }

}

function mdParse(rawDescription: string) {
  return rawDescription;
}