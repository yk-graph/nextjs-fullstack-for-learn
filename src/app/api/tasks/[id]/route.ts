import { NextRequest, NextResponse } from 'next/server'

import { connectDb } from '@/utils/database'
import { TaskModel } from '@/models/task'

export const GET = async (_: NextRequest, { params }: { params: { id: string } }) => {
  try {
    await connectDb()
    const task = await TaskModel.findById(params.id)

    if (!task) {
      return NextResponse.json({ messeage: 'Task not found' }, { status: 404 })
    }

    return NextResponse.json({ task })
  } catch (error) {
    const messeage = error instanceof Error ? 'Failed to fetch task' : 'Unknown error'
    return NextResponse.json({ messeage }, { status: 500 })
  }
}

// Tips: リクエストが発生するたびにデータを取得するための記述
export const dynamic = 'force-dynamic'
