'use client'

import { useRouter } from "next/navigation"
import { Button } from "./Button";

export default function ClientBackBTN() {
  const router = useRouter();
  return (
    <Button className="absolute top-4 left-4"
      onClick={() => {
        router.back()
      }}
    >Back</Button>
  )
}