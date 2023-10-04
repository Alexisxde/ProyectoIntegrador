'use client'
import { useEffect, useState } from 'react'
import Task from './Task'
import { getAllTasks } from '@/api/tasks.api'

export default function TasksList() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await getAllTasks()
        setTasks(res.data)
      } catch (error) {
        console.error('Error al cargar tareas:', error)
      }
    }
    loadTasks()
  }, [tasks])

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed === true
    } else if (filter === 'notCompleted') {
      return task.completed === false
    }
    return true
  })

  return (
    <>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
      <div className="flex items-center justify-around w-full border-t-2 border-indigo pt-2">
        <button
          className={`flex text-gray-400 hover:text-gray-500 rounded hover:underline ${
            filter === 'all' ? 'text-gray-500 underline' : ''
          }`}
          onClick={() => setFilter('all')}>
          All Tasks
        </button>
        <button
          className={`flex text-gray-400 hover:text-gray-500 rounded hover:underline ${
            filter === 'notCompleted' ? 'text-gray-500 underline' : ''
          }`}
          onClick={() => setFilter('notCompleted')}>
          Not Completed
        </button>
        <button
          className={`flex text-gray-400 hover:text-gray-500 rounded hover:underline ${
            filter === 'completed' ? 'text-gray-500 underline' : ''
          }`}
          onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>
    </>
  )
}
