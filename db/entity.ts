'use server'

import { Entity } from '@prisma/client'
import db from './db'

export async function fetchEntityData() {
  const universes = await db.universe.findMany({})

  for (const universe of universes) {
    const universeId = universe.id
    try {
      const response = await fetch(
        `https://f857-101-53-219-30.ngrok-free.app/api/universes/${universeId}`
      )
      if (!response.ok) {
        throw new Error('Network respone was not ok')
      }
      const Entities = (await response.json()) as Entity[]
      for (const entity of Entities) {
        const entityToInsert = {
          id: entity.id,
          name: entity.name,
          description: entity.description,
          archive: entity.archive,
          slug: entity.slug,
        }
        try {
          await db.entity.create({
            data: {
              ...entityToInsert,
              universe: {
                connect: {
                  id: universeId,
                },
              },
              templateType: {
                connect: {
                  id: entity.templateTypeId,
                },
              },
            },
          })
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
