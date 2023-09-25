'use client'
import Link from 'next/link'
import { newUser } from '@/api/users.api'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function FormUsers() {
  const router = useRouter()
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onSaveUser = e => {
    e.preventDefault()
    if (
      user.password === user.confirmPassword &&
      user.username !== '' &&
      user.email !== ''
    ) {
      newUser({
        email: user.email,
        username: user.username,
        password: user.password,
      })
      setUser({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      router.push('/sign-in', { scroll: false })
    }
  }

  return (
    <form
      className="flex flex-col items-start justify-start w-full"
      autoComplete="off">
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username">
          Usename
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="usename"
          type="text"
          placeholder="Username"
          autoComplete="off"
          value={user.username}
          onChange={e => setUser({ ...user, username: e.target.value })}
        />
        {/* {user.username !== '' ? (
          ''
        ) : (
          <p className="text-red-500 text-xs italic">Please choose a username.</p>
        )} */}
      </div>
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email">
          Email
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          value={user.email}
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
        {/* {user.email !== '' ? (
          ''
        ) : (
          <p className="text-red-500 text-xs italic">Please choose a email.</p>
        )} */}
      </div>
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password">
          Password
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="********"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
        {user.password === user.confirmPassword ? (
          ''
        ) : (
          <p className="text-red-500 text-xs italic">
            The passwords are not the same.
          </p>
        )}
      </div>
      <div className="mb-4 w-full">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword">
          Confirm password
        </label>
        <input
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="********"
          onChange={e => setUser({ ...user, confirmPassword: e.target.value })}
        />
        {user.confirmPassword === user.password ? (
          ''
        ) : (
          <p className="text-red-500 text-xs italic">
            The passwords are not the same.
          </p>
        )}
      </div>
      <div className="flex items-start justify-between w-full flex-col">
        <Link
          href="./sign-in"
          className="font-bold text-sm text-pink-500 hover:text-pink-600 mb-6 w-full">
          Are you already registered?
        </Link>
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline w-full"
          type="summit"
          onClick={e => onSaveUser(e)}>
          Sign Up
        </button>
      </div>
    </form>
  )
}
