'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

interface NavItemProps {
  label: string
  link: string
  icon: React.ReactNode
}

export const NavItem = ({ label, link, icon }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = useMemo(() => pathname === link, [pathname, link])

  return (
    <Link
      href={link}
      className={`flex items-center gap-x-2 my-2 py-2 px-4 hover:bg-gray-700 ${
        isActive && 'bg-gray-700 border-r-4 border-green-500'
      }`}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}
