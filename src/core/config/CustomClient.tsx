'use client'
import '../../app/globals.css'
import { ReactNode, useLayoutEffect } from "react"
import { useRouter, usePathname } from "next/navigation";

export const CustomClient = ({ children }: Readonly<{ children: ReactNode }>) => {
  const router = useRouter();
  const pathname = usePathname()

  useLayoutEffect(() => {
    if (pathname === '/') {
      router.push('/home')
    }
  }, [pathname, router])

  return (
    <div className="w-full min-h-full flex items-center justify-center">
      {pathname === '/' ? (
        <div className="loader"></div>
      ) : (
        children
      )}
    </div>
  )
}
