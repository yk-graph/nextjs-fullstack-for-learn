import { FaTrashAlt } from 'react-icons/fa'

interface TaskDeleteButtonProps {
  id: string
}

export const TaskDeleteButton = ({ id }: TaskDeleteButtonProps) => {
  return (
    <form action="">
      <button type="submit">
        <FaTrashAlt className="hover:text-gray-700 cursor-pointer" />
      </button>
    </form>
  )
}
