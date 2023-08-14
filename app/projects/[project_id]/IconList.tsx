'use client'

import IconReference from "@/components/IconReference"

export default function IconList({technologies}: { technologies: string[] }) {
  
  return (
    <>
      {
        technologies.map(tech => {
          const Icon = IconReference[tech ?? 'no-icon'];
          
          return <Icon className="w-12 h-12 fill-white text-white m-0 p-2" key={tech} />
        })
      }
    </>
  )
}