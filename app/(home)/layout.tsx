import { ReactNode } from "react";

export default function HomeLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <div className='pt-8 pl-8 pb-4 w-min select-none'>
        <h2 className='text-5xl font-bold whitespace-nowrap'>Pedro Ribeiro</h2>
        <h4 className='text-xl text-end text-red-300'>FullStack Developer</h4>
      </div>
      <div className='h-full w-full'>
        {children}
      </div>
    </div>
  )
}