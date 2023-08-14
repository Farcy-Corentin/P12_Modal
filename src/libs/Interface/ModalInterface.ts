import { ReactNode } from 'react'

/**
 * Props for the Modal component.
 */
export default interface ModalInterface {
  /** A boolean indicating whether the modal is open or closed. */
  isOpen: boolean,
  /** A function to close the modal when triggered. */
  onClose: () => void,
  /** Additional CSS classes to be applied to the modal. (Optional) */
  className?: string,
  /** Aria-label for accessibility (screen readers) purposes. */
  ariaLabel: string,
  /** The position of the modal. Possible values: 'top', 'bottom', 'center'. (Optional) */
  position?: 'top' | 'bottom' | 'center',
  /** The size of the modal. Possible values: any valid CSS size class or 'fullscreen'. (Optional) */
  size?: string | 'fullscreen',
  /** The content to be displayed within the modal. */
  children: ReactNode,
  /**
   * String that sets the z-index property for the overlay that covers the rest of the screen when the modal is open. This can be useful for controlling the stacking order of elements. (Optional)
   */
  zIndexOverlay?: string,
  /**
   * String that sets the z-index property for the modal itself. Similar to zIndexOverlay, this can be used to control stacking order. (Optional)
   */
  zIndexModal?: string,
}