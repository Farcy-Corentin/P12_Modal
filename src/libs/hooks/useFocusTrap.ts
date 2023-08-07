import { RefObject, useEffect } from 'react'

const useFocusTrap = (isEnabled: boolean, ref: RefObject<HTMLDivElement>): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isEnabled && event.key === 'Tab') {
        const focusableElements = ref.current?.querySelectorAll(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) as NodeListOf<HTMLElement>

        focusableElements.forEach((element) => {
          element.tabIndex = 0;
        })

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        } else if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
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