// 'use client'

// import React from 'react'
// import { changeStatus } from '@/db/todo'
// import { useRouter } from 'next/navigation'

// interface Todo {
//   id: string
//   completed: boolean
// }

// const TodoStatus: React.FC<Todo> = ({ id, completed }) => {
//   const router = useRouter()

//   const handleToggleStatus = async () => {
//     try {
//       await changeStatus(id, completed)
//       router.refresh()
//     } catch (error) {
//       console.error('Error updating todo status:', error)
//     }
//   }
//   return (
//     <td
//       className={`py-4 px-6 text-sm font-medium cursor-pointer ${
//         completed ? 'text-green-600' : 'text-red-600'
//       }`}
//       onClick={handleToggleStatus}
//     >
//       {completed ? 'Completed' : 'Imcompleted'}
//     </td>
//   )
// }

// export default TodoStatus
