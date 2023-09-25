import TasksList from '@/components/TasksList'
import InputNewTask from '@/components/InputNewTask'

export default function TaskListHome() {
  return (
    <main className="h-screen bg-gradient-to-r from-fuchsia-500 to-pink-500 flex flex-col items-center justify-center">
      <header className="text-white text-4xl p-6 font-bold">
        <h1>Tasks List</h1>
      </header>
      <section className="h-auto w-3/6 bg-white shadow-lg rounded-md px-8 pt-6 pb-3 mb-4">
        <InputNewTask />
        <TasksList />
      </section>
    </main>
  )
}
