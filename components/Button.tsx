import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
}

export function Button(props: CustomButton) {
  const button = (
    <button 
      {...props} 
      className={`
        px-4 py-2 rounded-sm transition-all 
        border hover:border-opacity-80 border-opacity-30 border-red-500 
        bg-gradient-to-bl from-gray-700 to-gray-800 
      `+props.className}
      >{props.children}</button>
  )
  
  if (props.href)
    return (
      <Link href={props.href}>
        {button}
      </Link>
    )

  return button
}