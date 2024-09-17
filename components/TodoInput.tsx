// 'use client'
// import React, { useState } from 'react'
// import { Input } from './ui/input'
// import { Plus } from 'lucide-react'
// import { Button } from './ui/button'
// import { addTodos } from '@/db/todo'
// import { useRouter } from 'next/navigation'

// function Todoinput() {
//   const router = useRouter()
//   const [input, setInput] = useState('')
//   return (
//     <div className="flex items-center space-x-2">
//       <Input
//         placeholder="Enter todo"
//         className="focus-visible:outline-none border border-gray-300 rounded-lg px-3 py-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <div>
//         <Button
//           variant={'outline'}
//           size="icon"
//           onClick={async () => {
//             await addTodos(input)
//             setInput('')
//             router.refresh()
//           }}
//           className="p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-500 transition h-full flex items-center justtify-center"
//         >
//           <Plus size={20} />
//         </Button>
//       </div>
//     </div>
//   )
// }

// export default Todoinput
