'use client'
import Keep from '@/assets/LogoKeep'
import { useState } from 'react'
import { createTask } from '@/api/tasks.api'

export default function InputNewTask() {
  const [error, setError] = useState(false)
  const [task, setTask] = useState({
    title: '',
    description: '',
    due_date: '',
    completed: false,
  })

  const date = () => {
    const fechaOriginal = new Date()
    const año = fechaOriginal.getFullYear()
    const mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, '0')
    const dia = fechaOriginal.getDate().toString().padStart(2, '0')
    const fechaFormateada = `${año}-${mes}-${dia}`
    return fechaFormateada
  }

  const handleSave = async () => {
    if (task.title === '') {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
      return
    }
    await createTask({
      ...task,
      due_date: date(),
    })
    setTask({
      title: '',
      description: '',
      due_date: '',
      completed: false,
    })
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <input
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        type="text"
        value={task.title}
        autoComplete="off"
        placeholder="Add a title to the task..."
        onChange={e =>
          setTask({
            title: e.target.value,
            description: task.description,
          })
        }
      />
      <input
        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={task.description}
        autoComplete="off"
        placeholder="Add a description to the task..."
        onChange={e =>
          setTask({
            title: task.title,
            description: e.target.value,
          })
        }
      />
      {error ? (
        <div className="flex items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="text-orange-500 text-sm italic mt-3">
            Please check the fields.
          </p>
        </div>
      ) : (
        ''
      )}
      <button
        className="flex text-white bg-orange-500 hover:bg-orange-600 rounded py-1 px-2 m-4"
        onClick={() => handleSave()}>
        <Keep />
        Save
      </button>
    </div>
  )
}
