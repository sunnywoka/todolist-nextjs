'use server'
import db from './db'
export const addTodos = async (todo: string) => {
  const result = await db.todo.create({
    data: {
      title: todo,
    },
  })
  return result
}
