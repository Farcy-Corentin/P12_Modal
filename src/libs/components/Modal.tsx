import React from 'react'
import ModalInterface from '../Interface/ModalInterface'
import ModalOverlay from './ModalOverlay'

/**
 * @param isOpen A boolean indicating whether the modal is open or closed.
 * @param onClose A function to close the modal when triggered.
 * @param onOpen A function to open the modal when triggered. (Optional)
 * @param className Additional CSS classes to be applied to the modal. (Optional)
 * @param ariaLabel Aria-label for accessibility (screen readers) purposes.
 * @param position The position of the modal. Possible values: 'top', 'bottom', 'center'. (Optional)
 * @param size The size of the modal. Possible values: any valid CSS size class or 'fullscreen'. (Optional)
 * @param children The content to be displayed within the modal.
 */
export default function Modal(
  {
    isOpen = false,
    onClose,
    className,
    ariaLabel,
    position = 'center',
    size = 'md:w-1/2 md:h-auto',
    children,
  }:
    ModalInterface,
) {
  const style = {
    modal: `p-4 relative bg-white flex flex-col ${size !== 'fullscreen' ? 'md:rounded' : ''}`,
    size: `sm:w-full sm:h-full ${size === 'fullScreen' ? 'w-full h-full' : size}`,
  }

  return isOpen ? (
    <ModalOverlay position={position} onClose={onClose} isOpen={isOpen} size={size}>
      <div
        className={`${style.modal} ${style.size} ${className ?? ''}`}
        role="dialog"
        aria-label={ariaLabel}
        aria-modal="true"
      >
        {children}
      </div>
    </ModalOverlay>
  ) : null
}