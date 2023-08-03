import React from 'react'
import { MouseEvent, ReactNode, useEffect, useRef } from 'react'

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
  const modalRef = useRef<HTMLDivElement>(null)

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

  function closeModal(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      onClose()
    }
  }

  const style = {
    base: `flex bg-gray-700 bg-opacity-50 fixed top-0 left-0 w-full h-full justify-center backdrop-blur-[2px]`,
    position: {
      top: `items-start sm:p-0 ${size === 'fullScreen' ? 'md:p-0' : 'md:pt-16'}`,
      center: 'items-center',
      bottom: `items-end sm:p-0 ${size === 'fullScreen' ? 'md:p-0' : 'md:pb-16'}`,
    },
  }

  return (
    <div className={`${style.base} ${style.position[position as keyof typeof style.position]}`} ref={modalRef} onClick={closeModal}>
      {children}
    </div>
  )
}