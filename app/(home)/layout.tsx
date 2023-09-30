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

  if (!LayoutContext)
    return null

  return (
    <div 
      className="h-14 w-full bg-gray-550 bg-opacity-50 fixed left-0 z-10 transition-transform duration-500"
      style={{
        backdropFilter: 'blur(4px)',
        transform: LayoutContext.scrolled ? 'none' : 'translateY(-100%)'
      }}
    ></div>
  )
}
