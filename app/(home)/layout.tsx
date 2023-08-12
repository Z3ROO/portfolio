import { ReactNode } from "react";

export default function HomeLayout({children}: {children: ReactNode}) {
  return (
    <>
      <div className='pt-8 pl-8 pb-4 w-min'>
        <h2 className='text-5xl font-bold whitespace-nowrap'>Pedro Ribeiro</h2>
        <h4 className='text-xl text-end'>Software engineer</h4>
      </div>
      <div className='h-full w-full'>
        {children}
      </div>
    </>
  )
}