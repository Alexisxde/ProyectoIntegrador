'use client'
import LogoClose from '@/assets/LogoClose'
import { useState } from 'react'
import { deleteTask } from '@/api/tasks.api'

export default function EditText({ task }) {
  const { id, title, description, completed } = task

  const [editing, setEditing] = useState(false)
  const [editing2, setEditing2] = useState(false)
  const [titleEdit, setTitleEdit] = useState(title)
  const [descriptionEdit, setDescriptionEdit] = useState(description)

  const handleTitleEditClick = () => {
    setEditing(true)
  }

  const handleDescriptionEditClick = () => {
    setEditing2(true)
  }

  const handleInputKeyPress = e => {
    if (titleEdit !== '') {
      if (e.key === 'Enter') {
        setEditing(false)
        setEditing2(false)
        updateTask(id, titleEdit, descriptionEdit)
      }
    }
  }

  const acceptDelete = () => {
    if (window.confirm('Desea eliminar?')) {
      deleteTask(id)
    }
  }

  return (
    <>
      {editing ? (
        <input
          type="text"
          value={titleEdit}
          onChange={e => setTitleEdit(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
          className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
          onKeyDown={e => handleInputKeyPress(e)}
        />
      ) : editing2 ? (
        <input
          type="text"
          value={descriptionEdit}
          onChange={e => setDescriptionEdit(e.target.value)}
          onBlur={() => setEditing2(false)}
          autoFocus
          className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-2"
          onKeyDown={e => handleInputKeyPress(e)}
        />
      ) : (
        <>
          <div className="mx-2 flex items-center flex-col w-full">
            <p
              className={
                'w-full text-center font-semibold text-sm text-gray-00 cursor-pointer ' +
                (completed && 'line-through')
              }
              onClick={handleTitleEditClick}>
              {title}
            </p>
            <p
              className={
                'w-full text-start font-semibold text-sm text-gray-500 cursor-pointer ml-2 ' +
                (completed && 'line-through')
              }
              onClick={handleDescriptionEditClick}>
              {description}
            </p>
          </div>
          <button onClick={() => acceptDelete()}>
            <LogoClose />
          </button>
        </>
      )}
    </>
  )
}
