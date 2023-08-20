'use client'

import IconReference from "@/components/IconReference"

export default function IconList({technologies}: { technologies: string[] }) {
  
  return (
    <>
      {
        technologies.map(tech => {
          const Icon = IconReference[tech] ?? IconReference['no-icon'];
          
          return <Icon className="w-12 h-12 fill-red-400 text-red-400 m-0 p-2" key={tech} />
        })
      }
    </>
  )
}