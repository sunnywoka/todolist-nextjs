'use server'

import { Organization } from '@prisma/client'
import db from './db'

export async function fetchData() {
  const response = await fetch(
    'https://0ab8-125-238-232-95.ngrok-free.app/api/organizations'
  )
  const organizations = (await response.json()) as Organization[]
  for (const organization of organizations) {
    const organizationToInsert = {
      id: organization.id,
      name: organization.name,
      createdAt: organization.createdAt,
      clerkImageUrl: organization.clerkImageUrl,
      clerkOrganizationId: organization.clerkOrganizationId,
      tokens: organization.tokens,
    }
    try {
      await db.organization.create({
        data: {
          ...organizationToInsert,
        },
      })
    } catch (error) {
      console.log(error)
    }
  }
}
