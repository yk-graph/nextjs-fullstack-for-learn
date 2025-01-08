import { TaskDeleteButton, TaskEditButton } from '@/components'
import { TaskDocument } from '@/models/task'

interface TaskCardProps {
  task: TaskDocument
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="w-64 h-52 p-4 bg-white shadow-md rounded-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.dueDate}</div>
        <div className="mt-2 flex justify-between items-center">
          <div
            className={`text-sm text-white text-center py-1 px-2 w-24 rounded-full ${
              task.isCompleted ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {task.isCompleted ? 'completed' : 'Incompleted'}
          </div>
          <div className="flex gap-4 text-sm">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  )
}
