import { ReactNode } from 'react'

/**
 * A component representing the content area of a modal.
 * @param classname - Custom CSS class to apply to the content area.
 * @param children - The content to be displayed within the modal content area.
 * @param dividers - Indicates whether to display dividers.
 */
export default function ModalContent(
  {
    classname,
    children,
    dividers = false,
  }: {
    /**
     * Custom CSS class to apply to the content area.
     */
    classname?: string,

    /**
     * The content to be displayed within the modal content area.
     */
    children: ReactNode,

    /**
     * Indicates whether to display dividers.
     */
    dividers?: boolean,
  }) {
  const style = {
    base: 'p-6',
    dividers: 'border-t border-b border-gray-300',
  }

  return (
    <div
      className={`${style.base} ${classname ?? ''} ${dividers ? style.dividers : ''}`}
    >
      {children}
    </div>
  )
}