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

export const deleteTodos = async (id: string) => {
  const result = await db.todo.delete({
    where: {
      id: id,
    },
  })

  return result
}
