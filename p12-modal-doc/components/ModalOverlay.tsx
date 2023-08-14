import { ReactNode, useRef } from 'react'
import useFocusTrap from '@/hooks/useFocusTrap'
import useIsMobile from '@/hooks/useIsMobile'
import useBlockScroll from '@/hooks/useSblockScroll'
import useCloseModal from '@/hooks/useCloseModal'

/**
 * A modal overlay component that displays content in a modal dialog.
 *
 * @param position - The position of the modal. Possible values: top, bottom, center.
 * @param onClose - A function to close the modal when triggered.
 * @param isOpen - A boolean indicating whether the modal is open or closed.
 * @param children - The content to be displayed within the modal.
 * @param size - The size of the modal. Possible values: fullscreen.
 * @param zIndex - The z-index value for controlling the stacking order of the modal.
 */
export default function ModalOverlay(
  {
    position,
    onClose,
    isOpen,
    children,
    size,
    zIndex,
  }: {
    /**
     * The position of the modal.
     * Possible values: 'top', 'bottom', 'center'.
     */
    position: 'top' | 'bottom' | 'center' | string,
    /**
     * A function to close the modal when triggered.
     */
    onClose: () => void,
    /**
     * A boolean indicating whether the modal is open or closed.
     */
    isOpen: boolean,
    /**
     * The content to be displayed within the modal.
     */
    children: ReactNode,
    /**
     * The size of the modal.
     * Possible values: any string, 'fullscreen'.
     */
    size: string | 'fullscreen',
    /**
     * The z-index value for controlling the stacking order of the modal.
     */
    zIndex: string
  }) {
  const isMobile = useIsMobile()
  const modalRef = useRef<HTMLDivElement>(null)
  useCloseModal(modalRef, onClose)

  useBlockScroll(isOpen)
  useFocusTrap(isOpen, modalRef)

  const style = {
    base: `flex bg-gray-700 bg-opacity-50 fixed top-0 left-0 w-screen h-screen justify-center backdrop-blur-[2px]`,
    position: {
      top: `items-start ${isMobile || size === 'fullscreen' ? 'p-0' : 'pt-16'}`,
      center: 'items-center',
      bottom: `items-end ${isMobile || size === 'fullscreen' ? 'p-0' : 'pb-16'}`,
    },
    zIndex: zIndex,
  }

  return isOpen && (
    <div
      className={`${style.base} ${style.position[position as keyof typeof style.position]} ${style.zIndex}`}
      ref={modalRef} role="presentation" aria-hidden={isOpen}>
      {children}
    </div>
  )
}