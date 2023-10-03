import { ReactNode } from "react";

export function SectionTitle({children}: { children: ReactNode}) { 
  return (
    <h3 className='text-6xl pb-6 pt-8 font-bold text-red-400'>{children}</h3>
  )
}