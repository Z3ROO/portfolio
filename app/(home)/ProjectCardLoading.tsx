'use client'

import { usePathname } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"
import LoadingSpinner from "@/components/LoadingSpinner";
import { useProjectsContext } from "./ProjectsContext";

export default function ProjectCardLoading({ children }: { children: ReactNode }) {
  const projectsContext = useProjectsContext();
  const {isSomeCardLoading, setLoadingCard} = projectsContext!;
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.match(/^\/projects\/.*/))
      setIsLoading(false);
  },[pathname]);


  return (
    <div className="w-full h-full relative" onClick={() => {
        if (isSomeCardLoading.current) 
          isSomeCardLoading.current.deactivate();

        setLoadingCard(setIsLoading);
        setIsLoading(true);
      }}>
      {
        isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-10 flex justify-center items-center">
          <LoadingSpinner />
        </div>
        )
      }
      {children}
    </div>
  )
}