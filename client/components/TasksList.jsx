'use client'
import { useEffect, useState } from 'react'
import Task from './Task'
import { getAllTasks } from '@/api/tasks.api'

export default function TasksList() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks()
      setTasks(res.data)
    }
    loadTasks()
  }, [tasks])

  return (
    <>
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      {/* Separar en un componente */}
      <div className="flex items-center justify-around w-full border-t-2 border-indigo pt-2">
        <button
          // onClick={() => setFilter('all')}
          className="flex text-gray-400 hover:text-gray-500 rounded">
          All Tasks
        </button>
        <button
          // onClick={() => setFilter('not-completed')}
          className="flex text-gray-400 hover:text-gray-500 rounded">
          Not Completed
        </button>
        <button
          // onClick={() => setFilter('completed')}
          className="flex text-gray-400 hover:text-gray-500 rounded">
          Completed
        </button>
      </div>
    </>
  )
}
