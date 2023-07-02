/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import SectionSwitcher from "@/components/dashboard/SectionSwitcher";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function DashboardLayout({children}:{children: ReactNode}) {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === '/dashboard')
      router.push('/dashboard/projects')
  },[pathname]);

  return (
    <SectionSwitcher>
      {children}
    </SectionSwitcher>
  )
}