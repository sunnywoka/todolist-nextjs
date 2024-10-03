'use client'

import { Router } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { fetchTemplateData } from '@/db/fetchDataTemplate'

function FetchTemplateButton() {
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        fetchTemplateData()
        router.refresh()
      }}
      className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-500 transition h-10 w-10 flex items-center justtify-center"
    >
      Fetch T
    </Button>
  )
}
export default FetchTemplateButton
