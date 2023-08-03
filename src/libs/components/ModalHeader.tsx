import React from 'react'
import ModalCloseButton from './ModalCloseButton'

/**
 * A component representing the header of a modal.
 *
 * @param title - The title of modal.
 * @param onClose - A function to close the modal when triggered.
 * @returns {JSX.Element} The JSX element representing the modal header.
 */
export default function ModalHeader({ title, onClose }: { title: string, onClose: () => void }) {
  return (
    <header className="flex justify-between items-center w-full">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ModalCloseButton onClose={onClose}>
        X
      </ModalCloseButton>
    </header>
  )
}