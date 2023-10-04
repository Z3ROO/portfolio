import { ReactNode } from "react";

export function SectionTitle({children}: { children: ReactNode}) { 
  return (
    <h3 className='text-6xl pb-6 pt-24 font-bold text-red-100'>{children}</h3>
  )
}