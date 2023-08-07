import ModalCloseButton from "./ModalCloseButton.tsx"

/**
 * A component representing the header of a modal.
 *
 * @param title - The title of modal.
 * @param onClose - A function to close the modal when triggered.
 * @returns {JSX.Element} The JSX element representing the modal header.
 */
export default function ModalHeader({ title, onClose }: { title: string, onClose: () => void }) {
  return (
    <header className="flex relative justify-between items-center w-full">
      <h2 className="text-xl p-6 font-bold">{title}</h2>
      <ModalCloseButton onClose={onClose}>
        X
      </ModalCloseButton>
    </header>
  )
}