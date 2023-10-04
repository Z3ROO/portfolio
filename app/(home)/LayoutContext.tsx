/* eslint-disable react-hooks/exhaustive-deps */

'use client'
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, useRef } from "react";

interface ILayoutContext {
  scrolled: boolean
  containerMarginSize: number
  setContainerMarginSize: Dispatch<SetStateAction<number>>
}

const LayoutContext = createContext<ILayoutContext|null>(null);

export const useLayout = () => useContext(LayoutContext);

export function LayoutContextProvider({children}: {children: ReactNode}) {
  const [scrolled, setScrolled] = useState(false);
  
  const containerRef = useRef<HTMLDivElement|null>(null);
  const [containerMarginSize, setContainerMarginSize] = useState(0);
  
  useEffect(() => {
    if (!containerRef.current)
      return;
    const handler = () => {
      const container = containerRef.current!;
      const containerWidth = container.getBoundingClientRect().width;
      const windowWidth = window.innerWidth;

      setContainerMarginSize(Math.round((windowWidth - containerWidth)/2));
    }
    
    handler();

    window.onresize = handler

    return () => {window.onresize = null}

  },[containerRef.current])

  return (
    <LayoutContext.Provider value={{
      scrolled,
      containerMarginSize, setContainerMarginSize
    }}>
      <div 
        onScroll={e => {
          const scrollPos = (e.target as HTMLElement).scrollTop;
          
          if (scrollPos < 96 && scrolled === true)
            setScrolled(false);
          else if (scrollPos > 96 && scrolled === false)
            setScrolled(true);

        }}

        className="overflow-auto overflow-x-hidden h-screen w-screen flex justify-center custom-scrollbar"
      >
        <div className="max-w-7xl relative w-full" ref={containerRef}>
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  )
}
