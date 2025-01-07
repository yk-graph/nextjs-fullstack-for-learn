import { FaRegCheckSquare, FaRegClock, FaTasks } from 'react-icons/fa'

import { NavItem } from '@/components'

interface NavlistType {
  id: number
  label: string
  link: string
  icon: React.ReactNode
}

export const Navlist = () => {
  const navList: NavlistType[] = [
    { id: 1, label: 'All Tasks', link: '/', icon: <FaTasks className="size-5" /> },
    { id: 2, label: 'Completed Tasks', link: '/completed', icon: <FaRegCheckSquare className="size-5" /> },
    { id: 3, label: 'Expired Tasks', link: '/expired', icon: <FaRegClock className="size-5" /> },
  ]

  return (
    <div className="mt-24">
      {navList.map((navItem) => (
        <NavItem key={navItem.id} {...navItem} />
      ))}
    </div>
  )
}
