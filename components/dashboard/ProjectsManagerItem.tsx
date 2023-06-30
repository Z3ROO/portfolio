'use client'
import { Project } from "@/lib/types";
import { Button } from "@/components/Button";

export default function ProjectsManagerItem(props: Project & { _id: string }) {
  const { name, description, _id } = props;
  
  return (
    <div className="relative p-4 rounded-sm border-white border">
      <Button 
        onClick={async () => {
          const req = await fetch('/api/projects/'+_id, {
            method:'delete',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        }}
        className="absolute !border-red-500 top-3 right-4 text-red-300 text-sm"
      >
        Delete
      </Button>
      <h3>{name}</h3>
      <div>{description}</div>
    </div>
  );
}