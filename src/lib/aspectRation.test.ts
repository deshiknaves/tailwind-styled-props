import { describe, expect, it } from 'vitest'
import { extractProps } from '../lib/extractProps'

describe('aspectRation', () => {
  it('should be able to detect aspect ratio', () => {
    const content = `
      <Box aspect="auto" />
    `

    const result = extractProps(content)

    expect(result).toContain('aspect-auto')
  })

  it('should be able to detect aspect ratio with number', () => {
    const content = `
      <Box aspect="16/9" />
    `

    const result = extractProps(content)

    expect(result).toContain('aspect-16/9')
  })

  it('should be able to detect square aspect ratio', () => {
    const content = `
      <Box aspect="square" />
    `

    const result = extractProps(content)

    expect(result).toContain('aspect-square')
  })

  it('should be able to delete video aspect ratio', () => {
    const content = `
      <Box aspect="video" />
    `

    const result = extractProps(content)

    expect(result).toContain('aspect-video')
  })
})
