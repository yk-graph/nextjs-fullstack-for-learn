import { TaskDeleteButton, TaskEditButton } from '@/components'

export const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white shadow-md rounded-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">title</h1>
        <div className="mt-1 text-sm line-clamp-3">desc</div>
      </header>
      <div>
        <div className="text-sm">date</div>
        <div className="mt-2 flex justify-between items-center">
          <div
            className={`text-sm text-white text-center py-1 px-2 w-24 rounded-full ${
              true ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {true ? 'completed' : 'Incompleted'}
          </div>
          <div className="flex gap-4 text-sm">
            <TaskEditButton id="1" />
            <TaskDeleteButton id="1" />
          </div>
        </div>
      </div>
    </div>
  )
}
