'use client'

import { ChangeEvent, FC, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

import { TaskDocument } from '@/models/task'
import { FormState, updateTask } from '@/actions/task'

interface EditTaskFormProps {
  task: TaskDocument
}

export const EditTaskForm: FC<EditTaskFormProps> = ({ task }) => {
  const [title, seTtitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [dueDate, setDueDate] = useState(task.dueDate)
  const [isCompleted, setIsCompleted] = useState(task.isCompleted)

  // TIps: bindメソッドを使って任意の値を加えるための処理 | bindの第1引数はnull, 第2引数に変更したい値を指定する
  const updateTaskWithId = updateTask.bind(null, task._id)

  const initialState: FormState = { error: '' }
  const [state, formAction] = useFormState(updateTaskWithId, initialState) // Tips: useFormState | 第1引数 -> | 第2引数 ->

  const SubmitButton: FC = () => {
    const { pending } = useFormStatus()

    return (
      <button
        type="submit"
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400"
        disabled={pending}
      >
        Edit
      </button>
    )
  }

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => seTtitle(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="2020-01-01"
            max="2999-12-31"
            value={dueDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={isCompleted}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setIsCompleted(e.target.checked)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="isCompleted" className="text-sm">
            タスクを完了にする
          </label>
        </div>

        <SubmitButton />

        {state.error && <p className="mt-2 text-red-500 text-sm">{state.error}</p>}
      </form>
    </div>
  )
}
