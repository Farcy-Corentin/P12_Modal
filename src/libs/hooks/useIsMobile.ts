import { useState, useEffect } from 'react'

const SIZE = 768

/**
 * A custom hook to determine if the screen width is below a specified size (default: 768px),
 * indicating whether the device is considered mobile.
 * @param size - The screen width breakpoint to determine mobile status.
 * @returns {boolean} - Indicates whether the device is considered mobile.
 */
export default function useIsMobile(size= SIZE) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < size)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}