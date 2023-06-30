import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button(props: CustomButton) {
  return <button {...props} className={"px-2 py-1 border border-white rounded-sm "+props.className}>{props.children}</button>
}