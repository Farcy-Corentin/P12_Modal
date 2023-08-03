import { ReactNode } from 'react'

/**
 * Props for the Modal component.
 */
export default interface ModalInterface {
  /** A boolean indicating whether the modal is open or closed. */
  isOpen: boolean
  /** A function to close the modal when triggered. */
  onClose: () => void
  /** Additional CSS classes to be applied to the modal. (Optional) */
  className?: string
  /** Aria-label for accessibility (screen readers) purposes. */
  ariaLabel: string
  /** The position of the modal. Possible values: 'top', 'bottom', 'center'. (Optional) */
  position?: 'top' | 'bottom' | 'center'
  /** The size of the modal. Possible values: any valid CSS size class or 'fullscreen'. (Optional) */
  size?: string | 'fullscreen'
  /** The content to be displayed within the modal. */
  children: ReactNode
}