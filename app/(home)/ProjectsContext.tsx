/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { ProjectMetadata } from "@/types/ProjectMetadataType";
import { createContext, ReactNode, useState, useEffect, useContext, SetStateAction, useRef, Dispatch } from "react";

interface IProjectsContext {
  searchInput: string
  setSearchInput: React.Dispatch<SetStateAction<string>>
  projects: ProjectMetadata[]
  hideStaticProjects: boolean
  isSomeCardLoading: {current: {deactivate: () => void}|null}
  setLoadingCard(setter: Dispatch<SetStateAction<boolean>>): void
}

const Context = createContext<IProjectsContext|null>(null);

export function SortProjectsContext({children, originalProjects}: { children: ReactNode, originalProjects: ProjectMetadata[] }) {
  const [searchInput, setSearchInput] = useState('');
  const [projects, setProjects] = useState<ProjectMetadata[]>([]);
  const [hideStaticProjects, setHideStaticProjects] = useState(false);
  const isSomeCardLoading = useRef<{deactivate: () => void}|null>(null);

  useEffect(() => {
    if (searchInput !== '' && !hideStaticProjects)
      setHideStaticProjects(true);

    const validSearchInput = !!searchInput.match(/^[a-z0-9\s]*$/i)?.[0];

    if (validSearchInput || searchInput === '') {
      const searchParam = new RegExp(searchInput, 'i')

      setProjects(
        originalProjects.filter(
          project => {
            if (project.name.match(searchParam) || project.technologies.some( tech => tech.match(searchParam)))
              return true;
            return false;
          }
        )
      );
  }

  }, [searchInput])

  function setLoadingCard(setter: Dispatch<SetStateAction<boolean>>) {
    isSomeCardLoading.current = {deactivate: () => {
      setter(false);
      isSomeCardLoading.current = null;
    }}
  }
  
  return (
    <Context.Provider value={{
      searchInput, setSearchInput,
      projects,
      hideStaticProjects,
      isSomeCardLoading,
      setLoadingCard
    }}>
      {children}
    </Context.Provider>
  )
}

export const useProjectsContext = () => useContext(Context);