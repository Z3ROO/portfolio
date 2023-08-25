
export default async function GetProject(project_id: string) {
  const metadata = (await import('@/public/projects/'+project_id+'/metadata')).default;

  return {
    ...metadata
  }

}
