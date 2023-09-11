import { ReactNode } from "react";

export default function Section(props: {title: string, children: ReactNode}) {
  return (
    <div className="p-6">
      <h2 className="text-5xl font-bold py-4">{props.title}</h2>
      {props.children}
    </div>
  )
}