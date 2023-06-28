'use client'
import { Project } from "@/lib/repository/ProjectsRepo";

type ProjectWithId = Project & { _id: string };


export default function Project(props: ProjectWithId) {
  const { name, description, _id } = props;
  console.log(JSON.stringify({
    projectId: _id
  }))
  return (
    <div className="relative p-4 rounded-sm border-white border">
      <button 
        onClick={async () => {
          const req = await fetch('/api/projects/'+_id, {
            method:'delete',
            headers: {
              'Content-Type': 'application/json'
            }
          })

          
        }}
        className="absolute border border-red-500 top-3 right-4 p-1 px-2 rounded-sm text-red-300 text-sm"
      >
        Delete
      </button>
      <h3>{name}</h3>
      <div>{description}</div>
    </div>
  );
}