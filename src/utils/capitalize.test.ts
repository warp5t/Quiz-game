import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useCapitalize } from './capitalizer'

describe('useCapitalize', () => {
  it('returns empty string for empty input', () => {
    const { result } = renderHook(({ text }) => useCapitalize(text), {
      initialProps: { text: '' }
    })
    expect(result.current).toBe('')
  })

  it('capitalizes first letter of a word', () => {
    const { result } = renderHook(({ text }) => useCapitalize(text), {
      initialProps: { text: 'hello' }
    })
    expect(result.current).toBe('Hello')
  })

  it('keeps already-capitalized word', () => {
    const { result } = renderHook(({ text }) => useCapitalize(text), {
      initialProps: { text: 'Hello' }
    })
    expect(result.current).toBe('Hello')
  })

  it('does not change when first char is not a letter', () => {
    const { result } = renderHook(({ text }) => useCapitalize(text), {
      initialProps: { text: '1abc' }
    })
    expect(result.current).toBe('1abc')
  })

  it('updates value when input changes', () => {
    const { result, rerender } = renderHook(({ text }) => useCapitalize(text), { initialProps: { text: 'world' } })
    expect(result.current).toBe('World')

    rerender({ text: 'react' })
    expect(result.current).toBe('React')

    rerender({ text: '' })
    expect(result.current).toBe('')
  })
})
