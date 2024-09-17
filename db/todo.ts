// 'use server'
// import db from './db'
// export const addTodos = async (todo: string) => {
//   const result = await db.todo.create({
//     data: {
//       title: todo,
//     },
//   })
//   return result
// }

// export const deleteTodos = async (id: string) => {
//   const result = await db.todo.delete({
//     where: {
//       id: id,
//     },
//   })

//   return result
// }

// export const changeStatus = async (id: string, completed: boolean) => {
//   const result = await db.todo.update({
//     where: {
//       id: id,
//     },
//     data: {
//       completed: !completed,
//     },
//   })
// }
