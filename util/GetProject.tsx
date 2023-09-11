import { ProjectMetadata } from "../types/ProjectMetadataType";

export default async function GetProject(project_id: string): Promise<ProjectMetadata> {
  const metadata = (await import('@/public/projects/'+project_id+'/metadata')).default;

  return {
    ...metadata
  }
}
