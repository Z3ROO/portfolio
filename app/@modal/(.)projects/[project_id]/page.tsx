import ProjectPage from "@/app/projects/[project_id]/page";

export default function InterpectedProjectPage(props: {params: {project: any, project_id: string}}) {
  return <ProjectPage {...props} asModal />;
}
