import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import IconReference from "./IconReference";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  target?: string
  icon: string
}

export function IconButton(props: CustomButton) {
  const Icon = IconReference[props.icon];
  const button = (
    <button 
      {...props} 
      className={`
        px-2.5 py-1.5 rounded-sm transition-all 
        border hover:border-opacity-50 border-opacity-10 border-red-400
        text-red-400 hover:text-red-300 text-sm
      `+props.className}
      ><Icon className={`text-base inline ${props.children && 'mr-2'}`}/>{props.children}</button>
  )
  
  if (props.href)
    return (
      <Link href={props.href} target={props.target}>
        {button}
      </Link>
    )

  return button
}