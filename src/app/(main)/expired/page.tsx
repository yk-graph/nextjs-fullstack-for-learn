import { TaskCard } from '@/components'
import { TaskDocument } from '@/models/task'

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URI}/tasks/expired`, {
    cache: 'no-cache',
  })
  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(data.message)
  }

  return data.tasks as TaskDocument[]
}

export default async function ExpiredTaskPage() {
  const tasks = await getExpiredTasks()

  console.log(!!tasks)

  return (
    <div className="text-gray-800 p-8 h-full">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Expired Tasks</h1>
      </header>
      <div className="flex flex-wrap gap-4 mt-8">
        {!!tasks.length ? tasks.map((task) => <TaskCard key={task._id} task={task} />) : <p>No expired tasks</p>}
      </div>
    </div>
  )
}
