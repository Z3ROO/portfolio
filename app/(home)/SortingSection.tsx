'use client'

import { useProjectsContext } from "./ProjectsContext";

export function SortingSection() {
  const projectsContext = useProjectsContext();

  if (!projectsContext)
    return null;
  
  const {searchInput, setSearchInput} = projectsContext;

  return (
    <div className="flex w-10/12 justify-end px-4 py-2">
      <div className="flex justify-between w-48 self-end mr-8">
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Complexity</span>
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Difficulty</span>
        <span className="text-sm text-red-200 hover:text-red-300 cursor-pointer">Size</span>
      </div>
      <input className="w-72 h-8 px-2 py-1 rounded-sm shadow-inner shadow-[#0000002f] border border-opacity-30 hover:border-opacity-50 focus:border-opacity-75 outline-none border-red-500 bg-gray-800 focus:bg-gray-700 transition-all" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
    </div>
  )
}
