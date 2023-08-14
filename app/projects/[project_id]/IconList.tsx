'use client'

import IconReference from "@/components/IconReference"

export default function IconList({technologies}: { technologies: string[] }) {
  
  return (
    <>
      {
        technologies.map(tech => {
          const Icon = IconReference[tech ?? 'no-icon'];
          
          return <Icon className="w-16 fill-white text-white" key={tech} />
        })
      }
    </>
  )
}