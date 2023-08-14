import { useState } from 'react'
import Modal from '@/components/Modal'
import ModalHeader from '@/components/ModalHeader'
import ModalCloseButton from '@/components/ModalCloseButton'

export default function ModalCloseButtonExemple() {
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
      <button onClick={() => setIsOpen(true)} style={{
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
        <ModalHeader>
          <h2 className="text-xl p-6 font-bold">I'm a modal</h2>
          <ModalCloseButton onClose={onClose}>
            X
          </ModalCloseButton>
        </ModalHeader>
        <div className="flex items-center h-full p-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, eaque, ipsam. Aperiam, autem consequuntur
            culpa debitis eligendi excepturi expedita laborum nemo quam reprehenderit sapiente ullam veniam. Aliquid,
            beatae, quidem. Rerum.
          </p>
        </div>
      </Modal>
    </div>
  )
}