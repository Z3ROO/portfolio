'use client'

import { useRouter } from "next/navigation"

export default function ClientBackBTN() {
  const router = useRouter();
  return (
    <button className="absolute top-4 left-4 px-1 py-2 rounded-sm border border-white"
      onClick={() => {
        router.back()
      }}
    >Back</button>
  )
}