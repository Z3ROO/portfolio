import { ReactNode } from "react";

export function SectionH2(props: {title: string, children: ReactNode}) {
  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold py-4">{props.title}</h2>
      {props.children}
    </div>
  )
}

export function SectionH3(props: {title: string, children: ReactNode}) {
  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold py-4">{props.title}</h2>
      {props.children}
    </div>
  )
}

export function SectionH4(props: {title: string, children: ReactNode}) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold py-4">{props.title}</h2>
      {props.children}
    </div>
  )
}