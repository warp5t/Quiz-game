import { useMemo } from 'react'

export const useCapitalize = (text: string) => {
  return useMemo(() => {
    if (!text) return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  }, [text])
}
