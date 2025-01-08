import Link from 'next/link'
import { MdAddTask } from 'react-icons/md'

import { TaskCard } from '@/components'
import { TaskDocument } from '@/models/task'

const getAllTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URI}/tasks`, {
    cache: 'no-cache',
  })
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(data.messeage)
  }

  return data.allTasks as TaskDocument[]
}

export default async function MainPage() {
  const tasks = await getAllTasks()

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
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}
