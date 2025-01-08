import { NextResponse } from 'next/server'

import { TaskDocument, TaskModel } from '@/models/task'
import { connectDb } from '@/utils/database'

export const GET = async () => {
  try {
    await connectDb()
    const allTasks: TaskDocument[] = await TaskModel.find()

    return NextResponse.json({
      allTasks,
    })
  } catch (error) {
    const messeage = error instanceof Error ? 'Failed to fetch tasks' : 'Unknown error'
    return NextResponse.json({ messeage }, { status: 500 })
  }
}

// Tips: リクエストが発生するたびにデータを取得するための記述
export const dynamic = 'force-dynamic'
