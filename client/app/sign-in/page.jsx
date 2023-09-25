import Link from 'next/link'

export const metadata = {
  title: 'Sign In - Created by @olivarezalexis_',
}

export default function SignInPage() {
  return (
    <main className="h-screen bg-gradient-to-r from-fuchsia-500 to-pink-500 flex flex-col items-center justify-center">
      <section className="w-2/5 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <header className="text-black text-center text-4xl font-bold mb-4">
          <h1 className="select-none">Welcome Back 👋</h1>
        </header>
        <form
          className="flex flex-col items-start justify-start w-full"
          autoComplete="off">
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a email.</p> */}
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
            />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between w-full mb-5">
            <Link
              href="./"
              className="font-bold text-sm text-pink-500 hover:text-pink-600">
              Forgot Password?
            </Link>
            <Link
              href="./sign-up"
              className="font-bold text-sm text-pink-500 hover:text-pink-600">
              Log in
            </Link>
          </div>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline w-full"
            type="summit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
