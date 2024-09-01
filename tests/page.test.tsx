import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '@/app/page'

vi.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))

describe('Home Page', () => {
  it('should render the heading', async () => {
    render(await Home())
    expect(
      screen.getByRole('heading', { level: 1, name: 'Todo List' })
    ).toBeDefined()
  })
})
