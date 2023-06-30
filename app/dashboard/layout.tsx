'use client'

import SectionSwitcher from "@/components/dashboard/SectionSwitcher";
import { ReactNode } from "react";

export default function DashboardLayout({children}:{children: ReactNode}) {
  return (
    <SectionSwitcher>
      {children}
    </SectionSwitcher>
  )
}