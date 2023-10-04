import NewTask from '@/components/NewTask'
import TasksList from '@/components/TasksList'

export default function TaskListHome() {
  return (
    <main className="h-screen bg-gradient-to-r from-orange-500 to-orange-400 flex flex-col items-center justify-center">
      <section className="h-auto w-3/6 bg-white shadow-lg rounded-md px-8 pt-6 pb-3 mb-4">
        <header className="text-black text-4xl pb-4 font-bold text-center">
          <h1>Tasks List</h1>
        </header>
        <NewTask />
        <TasksList />
      </section>
    </main>
  )
}
