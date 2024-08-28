import Todoinput from '@/components/TodoInput'
import db from '@/db/db'

export default async function Home() {
  const allTodos = await db.todo.findMany()

  return (
    <main>
      <div className="flex flex-col items-start justify-start gap-6 p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 my-6">
          Todo List
        </h1>
        <Todoinput />
        <h1 className="font-bold text-2xl text-gray-800">Existing Todos</h1>
        <div className="w-full space-y-4">
          {allTodos.map((todo) => (
            <div key={todo.id}>
              <h2 className="text-lg font-medium text-gray-700">
                {todo.title}
              </h2>
              <h3
                className={`text-sm mt-1 ${
                  todo.completed ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {todo.completed ? 'Completed' : 'Imcompleted'}
              </h3>
              <span className="text-gray-400">----</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
