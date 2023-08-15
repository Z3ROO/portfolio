import ProjectPage from "@/app/projects/[project_id]/page";

export default function InterpectedProjectPage(props: {params: {project_id: string}}) {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="h-5/6 w-11/12 bg-gray-800 bg-opacity-90" style={{backdropFilter:'blur(4px)'}}>
        <ProjectPage {...props} asModal />
      </div>
    </div>
  );
}
