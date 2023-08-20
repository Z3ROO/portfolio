'use client'

import { useRouter } from "next/navigation"
import { Button } from "./Button";

export default function ClientBackBTN() {
  const router = useRouter();
  return (
    <Button className=""
      onClick={() => {
        router.back()
      }}
    >Back</Button>
  )
}