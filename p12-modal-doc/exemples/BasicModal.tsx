import { useState } from 'react'
import Modal from '@/components/Modal'

export default function BasicModal() {
  const [isOpen, setIsOpen] = useState(false)

  function onClose() {
    setIsOpen(false)
  }

  return (
    <div className="border rounded-2xl mt-3 p-4" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px',
      width: '100%',
    }}>
      <button onClick={(event) => {
        event.preventDefault()
        setIsOpen(true)
      }} style={{
        border: 'black 2px solid',
        padding: '8px 20px',
        borderRadius: '50px',
      }}>Open
      </button>
      <Modal
        isOpen={isOpen}
        ariaLabel="Successfull modal when employee is created."
        onClose={onClose}
        zIndexOverlay="z-40"
        zIndexModal="z-50"
      >
        <div className="flex flex-col items-center h-full">
          <div className="flex justify-end w-full">
            <button onClick={onClose} className="p-4">X</button>
          </div>
          <div className="flex items-center h-full p-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eaque, ipsam. Aperiam, autem consequuntur culpa debitis eligendi excepturi expedita laborum nemo quam reprehenderit sapiente ullam veniam. Aliquid, beatae, quidem. Rerum.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
