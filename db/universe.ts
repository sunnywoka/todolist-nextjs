'use server'

import db from './db'

export async function fetchUniverseData() {
  const organizations = await db.organization.findMany({})
  for (const organization of organizations) {
    const organnizationId = organization.id
    try {
      const response = await fetch(
        `https://f857-101-53-219-30.ngrok-free.app/api/organizations/${organnizationId}`
      )
      if (!response.ok) {
        throw new Error('Network respone was not ok')
      }
      const universes = await response.json()
      for (const universe of universes) {
        const universeToInsert = {
          id: universe.id,
          name: universe.name,
          description: universe.description,
        }
        try {
          await db.universe.create({
            data: {
              ...universeToInsert,
              Organization: {
                connect: {
                  id: organnizationId,
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
