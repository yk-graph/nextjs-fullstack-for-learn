'use server'

import { redirect } from 'next/navigation'

import { Task, TaskModel } from '@/models/task'
import { connectDb } from '@/utils/database'

export interface FormState {
  error: string
}

export const createTask = async (state: FormState, formDate: FormData) => {
  const newTask: Task = {
    title: formDate.get('title') as string,
    description: formDate.get('description') as string,
    dueDate: formDate.get('dueDate') as string,
    isCompleted: false,
  }

  try {
    await connectDb() // Tips: MongoDB に接続する処理
    await TaskModel.create(newTask)
  } catch (error) {
    console.error(error)
    state.error = 'Failed to create a new task'
  }

  redirect('/')
}

export const updateTask = async (id: string, state: FormState, formDate: FormData) => {
  const updatedTask: Task = {
    title: formDate.get('title') as string,
    description: formDate.get('description') as string,
    dueDate: formDate.get('dueDate') as string,
    isCompleted: Boolean(formDate.get('isCompleted')),
  }

  try {
    await connectDb() // Tips: MongoDB に接続する処理
    await TaskModel.updateOne({ _id: id }, updatedTask)
  } catch (error) {
    console.error(error)
    state.error = 'Failed to update the task'
  }

  redirect('/')
}

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await connectDb()
    await TaskModel.deleteOne({ _id: id })
  } catch (error) {
    console.error(error)
    state.error = 'Failed to delete the task'
  }

  redirect('/')
}
