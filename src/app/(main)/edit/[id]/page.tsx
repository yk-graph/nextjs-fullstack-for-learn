import { EditTaskForm } from '@/components'
import { TaskDocument } from '@/models/task'

interface Params {
  params: { id: string }
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URI}/tasks/${id}`, {
    cache: 'no-cache',
  })

  const data = await response.json()

  if (response.status !== 200) {
    throw new Error(data.messeage)
  }

  return data.task as TaskDocument
}

const EditTaskPage = async ({ params }: Params) => {
  const task = await getTask(params.id)

  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm />
    </div>
  )
}

export default EditTaskPage
