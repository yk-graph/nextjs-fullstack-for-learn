import Link from 'next/link'
import { MdAddTask } from 'react-icons/md'

import { TaskCard } from '@/components'

export default function MainPage() {
  return (
    <div className="text-gray-800 p-8 h-full">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">All Tasks</h1>
        <Link
          href={'/new'}
          className="flex items-center gap-x-2 py-2 px-4 font-semibold text-white border rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <span className="text-sm">Add Task</span>
        </Link>
      </header>
      <div className="flex flex-wrap gap-4 mt-8">
        <TaskCard />
      </div>
    </div>
  )
}
