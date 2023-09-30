/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ReactNode } from "react"
import { LayoutContextProvider, useLayout } from "./LayoutContext";
import DarkModeToggler from "./DarkModeToggler";
import Hero from "./Hero";

export default function Layout({children}: {children: ReactNode}) {

  return (
    <LayoutContextProvider>
        
      <NavbarBody />
      <DarkModeToggler />
      <Hero />
        
      {children}
    </LayoutContextProvider>
  )
}

function NavbarBody() {
  const LayoutContext = useLayout();

  if (!LayoutContext || !LayoutContext.scrolled)
    return null

  return (
    <div className="h-14 w-full bg-white bg-opacity-25 fixed left-0"></div>
  )
}
