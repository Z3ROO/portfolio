
export default function ProjectPage() {
  const project = {
    name: 'Project name',
    description: 'Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, '
  }
  return (
    <div className="fixed  top-0 left-0 h-screen w-screen flex justify-center items-center">
      <div className="h-10/12 w-11/12 bg-black bg-opacity-90 overflow-auto" style={{backdropFilter:'blur(4px)'}}>
        <div className="flex justify-center">
          <div className="max-w-5xl mt-16">
            <h1 className="font-bold text-5xl">{project.name}</h1>
            <div className="w-full p-8"><div className="w-full h-96 bg-cyan-950"></div></div>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}