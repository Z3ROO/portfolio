import Link from "next/link"

export default function ProjectPage() {
  const project = {
    name: 'Project name',
    description: 'Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, Description of the project, '
  }
  return (
    <div className="relative flex justify-center">
      <Link className="absolute top-4 left-4" href={'/'}>
        <button className="px-1 py-2 rounded-sm border border-white">Home</button>
      </Link>
      <div className="max-w-5xl mt-16">
        <h1 className="font-bold text-5xl">{project.name}</h1>
        <div className="w-full p-8"><div className="w-full h-96 bg-cyan-950"></div></div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}