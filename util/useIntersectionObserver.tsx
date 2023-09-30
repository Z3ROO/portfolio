/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { RefObject, useEffect, useState } from "react";

interface useInterObsOptions extends IntersectionObserverInit {
  above?: number
}

export default function useIntersectionObserver(element: RefObject<HTMLElement>, options?: useInterObsOptions | undefined) {
  const [state, setState] = useState<'above'|'in'|'below'>('in');

  useEffect(() => {
    if (!element.current)
      return;

    const observer = new IntersectionObserver(([entry]) => {
      
      if (entry.isIntersecting) { 
        setState('in');
        console.log('in');
        
      }
      else {
        if (entry.boundingClientRect.top < (options?.above ?? 0)) {
          setState('above');
          console.log('above');
        }
        else {
          setState('below');
          console.log('below');
        }
      }
      
    }, options);
    
    if (element.current)
      observer.observe(element.current);

    return () => {
      observer.disconnect();
    }
  },[element.current]);

  return state
}