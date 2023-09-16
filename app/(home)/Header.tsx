'use client'

import { ReactNode, useState } from "react";
import SearchBar from "./SearchBar";

export default function Header({ children }: {children: ReactNode}) {
  const [slimHeader, setSlimHeader] = useState(false);
  return (
    <div className='w-full overflow-auto custom-scrollbar' 
        onScroll={e => {
          const scrollPos = (e.target as HTMLElement).scrollTop;

          if (scrollPos < 10 && slimHeader === true)
            setSlimHeader(false);
          else if (scrollPos > 10 && slimHeader === false)
            setSlimHeader(true);
        }}
      >
        <div className="h-40">
        <div 
          id="main-header"
          className='select-none z-10 flex flex-col relative w-[calc(100%-0.5rem)] bg-gray-900 bg-opacity-90 transition-all'
          style={{
            paddingTop: slimHeader ? '1rem' : '2rem',
            paddingLeft: slimHeader ? '2rem' : '2rem',
            position: slimHeader ? 'fixed' : undefined,
            height: slimHeader ? '4rem' : '10rem',
            backdropFilter: slimHeader ? 'blur(4px)' : 'none'
          }}
        >
          <div 
            className="w-min">
            <h2 
              className='text-5xl font-bold whitespace-nowrap mr-4  transition-all'
              style={{
                fontSize: slimHeader ? '2rem' : '3rem',
                display: slimHeader ? 'inline' : 'block'
              }}
              >Pedro Ribeiro</h2>
            <h4 
              className='text-xl text-end text-red-300 whitespace-nowrap transition-all'
              style={{
                fontSize: slimHeader ? '1rem' : '1.25rem',
                display: slimHeader ? 'inline' : 'block'
              }}
            >FullStack Developer</h4>
          </div>
          <SearchBar />
        </div>
        </div>
        {children}        
      </div>
  )
}