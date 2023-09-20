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
            className="h-40  w-[calc(100%-0.5rem)] bg-gray-900 bg-opacity-90 flex justify-center z-10"
            style={{
              position: slimHeader ? 'fixed' : undefined,
              backdropFilter: slimHeader ? 'blur(4px)' : 'none',
              height: slimHeader ? '4rem' : '10rem'
            }}
          >
            <div
              className='select-none w-full pl-4 max-w-6xl flex flex-col relative transition-all justify-between'
              style={{
                flexDirection: slimHeader ? 'row' : 'column'
              }}
            >
              <Logo slimHeader={slimHeader} />
              <SearchBar />
            </div>
          </div>
        </div>
        {children}        
      </div>
  )
}

function Logo({ slimHeader }: {slimHeader: boolean}) {
  return (
    <div 
      className="w-min"
      style={{
        paddingTop: slimHeader ? '1rem' : '2rem',
      }}
    >
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
  )
}