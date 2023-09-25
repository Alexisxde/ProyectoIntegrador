import LogoCheck from '@/assets/LogoCheck'
import LogoNotCheck from '@/assets/LogoNotCheck'
import EditText from './EditText'
import { editTask } from '@/api/tasks.api'

export default function Task({ task }) {
  const { id, title, description, completed } = task

  const handleEditTask = () => {
    const updatedTask = {
      id,
      title,
      description,
      completed: !completed,
    }
    editTask(id, updatedTask)
  }

  return (
    <>
      <div
        key={id}
        className="flex items-center justify-between shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3 mr-auto">
        {completed ? (
          <button onClick={() => handleEditTask()}>
            <LogoCheck />
          </button>
        ) : (
          <button onClick={() => handleEditTask()}>
            <LogoNotCheck />
          </button>
        )}
        <EditText htmlFor={id} task={task}></EditText>
      </div>
    </>
  )
}
