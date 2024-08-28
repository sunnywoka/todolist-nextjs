'use client'
import { Router } from 'lucide-react'
import { Button } from './ui/button'
import { deleteTodos } from '@/db/todo'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

interface DeleteButtonProps {
  id: string
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const router = useRouter()
  return (
    <Button
      variant={'outline'}
      size="icon"
      onClick={async () => {
        await deleteTodos(id)
        router.refresh()
      }}
      className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-500 transition h-6 w-6 flex items-center justtify-center"
    >
      <X size={10} />
    </Button>
  )
}

export default DeleteButton
