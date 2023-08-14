import { useEffect, RefObject } from 'react'

/**
 * A custom hook to automatically close a modal when clicking outside or pressing the Escape key.
 * @param modalRef - Ref to the modal element.
 * @param onClose - Function to close the modal.
 */
const useModalClose = (modalRef: RefObject<HTMLElement>, onClose: () => void)=> {
    useEffect(() => {
      /**
       * Function to handle clicks outside the modal.
       * @param event - Mouse event.
       */
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && modalRef.current === event.target as Node) {
        onClose()
      }
    }

      /**
       * Function to handle Escape key press.
       * @param event - Keyboard event.
       */
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [modalRef, onClose])
}

export default useModalClose