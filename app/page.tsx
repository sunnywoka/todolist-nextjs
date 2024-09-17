// import DeleteButton from '@/components/DeleteButton'
// import Todoinput from '@/components/TodoInput'
// import TodoStatus from '@/components/TodoStatus'

import FetchButton from '@/components/FetchButton'
import { Button } from '@/components/ui/button'
import db from '@/db/db'
import { fetchData } from '@/db/fetchData'

export default async function Home() {
  //const allTodos = await db.todo.findMany()

  return (
    <main>
      <FetchButton />
      {/* <div className="flex flex-col items-start justify-start gap-6 p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-extrabold text-center text-blue-600 my-6">
          Todo List
        </h1>
        <Todoinput />
        <h1 className="font-bold text-2xl text-gray-800">Existing Todos</h1>
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bf-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                  Todos
                </th>
                <th className="py-3 px-6 bf-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                  Status
                </th>
                <th className="py-3 px-6 bf-gray-200 text-gray-600 font-bold uppercase text-sm text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {allTodos.map((todo) => (
                <tr key={todo.id}>
                  <td className="py-4 px-6 text-gray-700 text-sm">
                    {todo.title}
                  </td>
                  <TodoStatus id={todo.id} completed={todo.completed} />
                  <td className="py-4 px-6 text-center">
                    <DeleteButton id={todo.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
      <div>Hello</div>
    </main>
  )
}
