import { MouseEvent, ReactNode, useEffect, useRef } from 'react'
import useFocusTrap from '../hooks/useFocusTrap.ts'
import useIsMobile from '../hooks/useIsMobile.ts'
import useBlockScroll from '../hooks/useSblockScroll.ts'
import useActiveElement from '../hooks/useActiveElement.ts'

/**
 * A modal overlay component that displays content in a modal dialog.
 *
 * @param position - The position of the modal. Possible values: top, bottom, center.
 * @param onClose - A function to close the modal when triggered.
 * @param isOpen - A boolean indicating whether the modal is open or closed.
 * @param children - The content to be displayed within the modal.
 * @param size - The size of the modal. Possible values: fullscreen.
 */
export default function ModalOverlay({ position, onClose, isOpen, children, size }: {
  position: 'top' | 'bottom' | 'center' | string,
  onClose: () => void,
  isOpen: boolean,
  children: ReactNode,
  size: string | 'fullscreen',
}) {
  const isMobile = useIsMobile()
  const modalRef = useRef<HTMLDivElement>(null)
  useBlockScroll(isOpen)

  useFocusTrap(isOpen, modalRef)

  useEffect(() => {
    function handleEscapeKeyPress(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
    }
  }, [isOpen, onClose])

  const openBtnRef = useActiveElement()

  function closeModal(event: MouseEvent<HTMLDivElement>) {
    console.log(openBtnRef)
    if (event.target === modalRef.current) {
      onClose()
      openBtnRef?.focus()
    }

    onClose()
    openBtnRef?.focus()
  }

  const style = {
    base: `flex bg-gray-700 bg-opacity-50 fixed top-0 left-0 w-full h-full justify-center backdrop-blur-[2px]`,
    position: {
      top: `items-start ${isMobile || size === 'fullScreen' ? 'p-0' : 'pt-16'}`,
      center: 'items-center',
      bottom: `items-end ${isMobile || size === 'fullScreen' ? 'p-0' : 'pb-16'}`,
    },
  }

  return (
    <div className={`${style.base} ${style.position[position as keyof typeof style.position]}`} ref={modalRef} onClick={closeModal} role="presentation" aria-hidden={isOpen}>
      {children}
    </div>
  )
}