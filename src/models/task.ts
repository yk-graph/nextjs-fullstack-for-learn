import mongoose, { Document } from 'mongoose'

// Tips: コレクションに保存するドキュメントの型を定義する処理 | Document型は _id, createdAt, updatedAt が自動で追加される | Document型で定義したドキュメントとTask型で定義したデータを合わせて使う
export interface Task {
  title: string
  description: string
  dueDate: string
  isCompleted: boolean
}
export interface TaskDocument extends Task, Document {
  _id: string
  createdAt: Date
  updatedAt: Date
}

const taskSchema = new mongoose.Schema<TaskDocument>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true } // Tips: createdAt と updatedAt が自動で追加される設定
)

export const TaskModel = mongoose.models.Task || mongoose.model<TaskDocument>('Task', taskSchema)
