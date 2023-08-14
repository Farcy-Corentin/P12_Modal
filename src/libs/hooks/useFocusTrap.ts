import { RefObject, useEffect } from 'react'

const useFocusTrap = (isEnabled: boolean, ref: RefObject<HTMLDivElement>): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isEnabled || event.key !== 'Tab') return

      const focusableElements = Array.from(
        ref.current?.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) || [],
      ) as HTMLElement[]

      if (focusableElements.length === 0) return

      focusableElements.map((element) => element.tabIndex = 0)

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (!document.activeElement || !ref.current?.contains(document.activeElement)) {
        event.preventDefault()
        firstElement.tabIndex = 0
        firstElement.focus()
        return
      }

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.tabIndex = 0
        firstElement.focus()
      }

      if (!ref.current.contains(document.activeElement)) {
        document.activeElement
        ref.current
        event.preventDefault()
      }
    }

    const handleClick = (event: MouseEvent) => {
      if (isEnabled && ref.current && !ref.current.contains(event.target as Node)) {
        ref.current.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClick)
    }
  }, [isEnabled, ref])
}

export default useFocusTrap