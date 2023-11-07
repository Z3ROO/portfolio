/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { createContext, ReactNode, useContext, SetStateAction, useRef, Dispatch } from "react";

interface IProjectsContext {
  isSomeCardLoading: {current: {deactivate: () => void}|null}
  setLoadingCard(setter: Dispatch<SetStateAction<boolean>>): void
}

const Context = createContext<IProjectsContext|null>(null);

export function SortProjectsContext({children}: { children: ReactNode }) {
  const isSomeCardLoading = useRef<{deactivate: () => void}|null>(null);

  function setLoadingCard(setter: Dispatch<SetStateAction<boolean>>) {
    isSomeCardLoading.current = {deactivate: () => {
      setter(false);
      isSomeCardLoading.current = null;
    }}
  }
  
  return (
    <Context.Provider value={{
      isSomeCardLoading,
      setLoadingCard
    }}>
      {children}
    </Context.Provider>
  )
}

export const useProjectsContext = () => useContext(Context);