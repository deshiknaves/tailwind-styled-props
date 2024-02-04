import { describe, expect, it } from 'vitest'
import { extractProps } from '../lib/extractProps'

describe('dimensions', () => {
  it('should be able to detect width', () => {
    const content = `
      <Box w={2} />
    `

    const result = extractProps(content)

    expect(result).toContain('w-2')
  })

  it('should be able to detect arbitrary width', () => {
    const content = `
      <Box w="100px" />
    `

    const result = extractProps(content)

    expect(result).toContain('w-[100px]')
  })

  it('should be able to detect height', () => {
    const content = `
      <Box h={2} />
    `

    const result = extractProps(content)

    expect(result).toContain('h-2')
  })

  it('should be able to detect arbitrary height', () => {
    const content = `
      <Box h="100px" />
    `

    const result = extractProps(content)

    expect(result).toContain('h-[100px]')
  })
})
