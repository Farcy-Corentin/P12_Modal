import { useEffect } from 'react'

/**
 * A custom hook to block or unblock scrolling of the body element.
 * @param block - Indicates whether to block scrolling (true) or unblock (false).
 */
const useBlockScroll = (block: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (block) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalStyle
    }

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [block])
}

export default useBlockScroll