import { ReactNode } from 'react'

/**
 * A component representing the header of a modal.
 *
 * @param children - The content to be displayed within the modal.
 */
export default function ModalHeader({ children }: {
  /**
   * The content to be displayed within the modal.
   */
  children: ReactNode
}) {
  return (
    <header className="flex relative justify-between items-center w-full">
      {children}
    </header>
  )
}