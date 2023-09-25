import FormUsers from '@/components/FormUsers'

export const metadata = {
  title: 'Sign Up - Created by @olivarezalexis_',
}

export default function SignUpPage() {
  return (
    <main className="h-screen bg-gradient-to-r from-fuchsia-500 to-pink-500 flex flex-col items-center justify-center">
      <section className="w-2/5 bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <header className="text-black text-center text-4xl font-bold mb-4">
          <h1>Sign Up</h1>
        </header>
        <FormUsers />
      </section>
    </main>
  )
}
