'use client'

import { Router } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { fetchData } from '@/db/fetchData'
import { fetchUniverseData } from '@/db/universe'
import { fetchEntityData } from '@/db/entity'

function FetchButton() {
  const router = useRouter()
  return (
    <Button
      onClick={async () => {
        //await fetchData()
        //await fetchUniverseData()
        await fetchEntityData()
        router.refresh()
      }}
      className="p-1 rounded-md bg-blue-500 text-white hover:bg-blue-500 transition h-10 w-10 flex items-center justtify-center"
    >
      Fetch
    </Button>
  )
}
export default FetchButton
