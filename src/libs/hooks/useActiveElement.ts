import { useRef } from 'react'

export default function useActiveElement(): HTMLElement | null {
  const activeElementRef = useRef<HTMLElement | null>(null)

  activeElementRef.current = document.activeElement as HTMLElement

  return activeElementRef.current
}