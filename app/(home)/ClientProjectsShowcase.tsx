/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useProjectsContext } from "./ProjectsContext";
import { ProjectDisplay } from "./ProjectDisplay";

export function SortableProjects() {
  const projectsContext = useProjectsContext();

  if (!projectsContext)
    return null;

  const { projects, hideStaticProjects } = projectsContext;

  if (!hideStaticProjects)
    return null;

  return (
    <>
      {
        projects.map(project => {
          return <ProjectDisplay key={project.id} project={project}/>
        })
      }
    </>
  );
}
