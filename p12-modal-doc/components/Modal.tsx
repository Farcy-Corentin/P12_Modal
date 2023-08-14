import ModalInterface from '../Interface/ModalInterface'
import ModalOverlay from '@/components/ModalOverlay'
import useIsMobile from '@/hooks/useIsMobile'

/**
 * @param isOpen A boolean indicating whether the modal is open or closed.
 * @param onClose A function to close the modal when triggered.
 * @param onOpen A function to open the modal when triggered. (Optional)
 * @param className Additional CSS classes to be applied to the modal. (Optional)
 * @param ariaLabel Aria-label for accessibility (screen readers) purposes.
 * @param position The position of the modal. Possible values: 'top', 'bottom', 'center'. (Optional)
 * @param size The size of the modal. Possible values: any valid CSS size class or 'fullscreen'. (Optional)
 * @param children The content to be displayed within the modal.
 * @param zIndexOverlay
 * @param zIndexModal
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
    zIndexOverlay = 'z-10',
    zIndexModal = 'z-20',
  }:
    ModalInterface,
) {
  const isMobile = useIsMobile()
  const style = {
    modal: `relative bg-white flex flex-col ${size !== 'fullscreen' ? 'md:rounded' : ''}`,
    size: `${isMobile || size === 'fullscreen' ? 'w-screen h-screen' : size}`,
    zIndex: zIndexModal,
  }

  return isOpen && (
    <ModalOverlay position={position} onClose={onClose} isOpen={isOpen} size={size} zIndex={zIndexOverlay}>
      <div
        className={`${style.modal} ${style.size} ${className ?? ''} ${style.zIndex}`}
        role="dialog"
        aria-labelledby={ariaLabel}
        aria-modal="true"
      >
        {children}
      </div>
    </ModalOverlay>
  )
}