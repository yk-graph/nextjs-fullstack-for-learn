import { NextResponse } from 'next/server'

import { TaskDocument, TaskModel } from '@/models/task'
import { connectDb } from '@/utils/database'

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-')

  try {
    await connectDb()
    const tasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    })

    return NextResponse.json({ tasks })
  } catch (error) {
    const messeage = error instanceof Error ? 'Failed to fetch task' : 'Unknown error'
    return NextResponse.json({ messeage }, { status: 500 })
  }
}

// Tips: リクエストが発生するたびにデータを取得するための記述
export const dynamic = 'force-dynamic'
