'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { FC, useEffect } from 'react'

import { FaTrashAlt } from 'react-icons/fa'

import { deleteTask, FormState } from '@/actions/task'

interface TaskDeleteButtonProps {
  id: string
}

export const TaskDeleteButton = ({ id }: TaskDeleteButtonProps) => {
  // TIps: bindメソッドを使って任意の値を加えるための処理 | bindの第1引数はnull, 第2引数に変更したい値を指定する
  const deleteTaskWithId = deleteTask.bind(null, id)

  const initialState: FormState = { error: '' }
  const [state, formAction] = useFormState(deleteTaskWithId, initialState)

  useEffect(() => {
    if (state && state.error !== '') {
      alert(state.error)
    }
  }, [state])

  const SubmitButton: FC = () => {
    const { pending } = useFormStatus()

    return (
      <button type="submit" disabled={pending}>
        <FaTrashAlt className="hover:text-gray-700 cursor-pointer disabled:text-gray-400" />
      </button>
    )
  }

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  )
}
