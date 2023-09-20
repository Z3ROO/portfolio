/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useProjectsContext } from "./ProjectsContext";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const projectsContext = useProjectsContext();
  const [toolTip, setToolTip] = useState(false);

  if (!projectsContext)
    return null;
  
  const {searchInput, setSearchInput} = projectsContext;

  return (
    <div className="flex justify-end items-center md:visible invisible">
      <AiOutlineSearch className="text-red-800 w-5 h-5 mr-2 opacity-60" />
      <div className="relative group">
        <input 
          className="w-72 h-8 px-2 py-1 rounded-sm shadow-inner shadow-[#0000002f] border border-opacity-30 group-hover:border-opacity-50 focus:border-opacity-75 outline-none border-red-500 bg-gray-800 focus:bg-gray-700 transition-all" 
          value={searchInput} 
          onChange={e => setSearchInput(e.target.value)} 
          onFocus={() => {
            setToolTip(true);
          }}
        />
        {
          searchInput && 
          <RiCloseLine 
            onClick={() => setSearchInput('')}
            className={`
              absolute p-0.5 top-1.5 right-2 w-5 h-5 cursor-pointer 
              rounded-full transition-all 
              bg-red-200 bg-opacity-5 text-gray-500 hover:bg-opacity-10 hover:text-gray-400
            `} 
          />
        }
        {
          toolTip && <ToolTip deactivate={() => setToolTip(false)} />
        }
      </div>
    </div>
  )
}


function ToolTip({ deactivate }: { deactivate: () => void }) {
  const timeoutRef = useRef<NodeJS.Timeout|null>(null);
  const [shouldDeactivate, setShouldDeactivate] = useState(true);
  
  useEffect(() => {
    if (timeoutRef.current !== null)
      clearTimeout(timeoutRef.current);

    if (shouldDeactivate)
      timeoutRef.current = setTimeout(deactivate, 3500);
  }, [shouldDeactivate]);

  return (
    <div 
      className={`rounded-sm absolute px-5 py-4 bg-gray-550 z-10 top-12 -left-1/2 drop-shadow`} 
      onMouseEnter={() => setShouldDeactivate(false)} 
      onMouseLeave={() => setShouldDeactivate(true)}
    >
      <div className="absolute border-8 border-gray-550 w-1 h-1 border-x-transparent border-t-transparent -top-4 left-2/3"></div>
      <span className="select-none">Search by name or technology.</span>
    </div>
  )
}