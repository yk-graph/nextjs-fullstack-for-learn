import { TaskCard } from '@/components'

export default function ExpiredTaskPage() {
  return (
    <div className="text-gray-800 p-8 h-full">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Expired Tasks</h1>
      </header>
      <div className="flex flex-wrap gap-4 mt-8">
        <TaskCard />
      </div>
    </div>
  )
}
