'use client'

import { ReactNode } from "react";
import { useProjectsContext } from "./ProjectsContext";

export function HideStaticProjects({ children }: { children: ReactNode }) {
  const projectsContext = useProjectsContext();

  if (!projectsContext)
    return null;

  const { hideStaticProjects } = projectsContext;

  if (hideStaticProjects)
    return null

  return (
    <>
      {children}
    </>
  )
}