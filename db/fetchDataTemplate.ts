'use server'

import { TemplateType } from '@prisma/client'
import db from './db'

export async function fetchTemplateData() {
  const response = await fetch(
    'https://f857-101-53-219-30.ngrok-free.app/api/templates'
  )
  const templateTypes = (await response.json()) as TemplateType[]
  for (const templateType of templateTypes) {
    const templateTypeToInsert = {
      id: templateType.id,
      type: templateType.type,
    }
    try {
      await db.templateType.create({
        data: {
          ...templateTypeToInsert,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}
