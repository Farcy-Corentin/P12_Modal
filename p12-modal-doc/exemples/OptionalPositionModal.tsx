import { useState } from 'react'
import Modal from '@/components/Modal'
import ModalInterface from '@/Interface/ModalInterface'

export default function OptionalPositionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<ModalInterface['position']>(undefined)
  const positions: ModalInterface['position'][] = ['top', 'bottom', 'center']

  function onClose() {
    setIsOpen(false)
  }

  return (
    <div className="border rounded-2xl mt-3 p-4 flex flex-col justify-between items-center lg:flex lg:flex-row lg:justify-between lg:items-center" style={{
      height: '200px',
      width: '100%',
    }}>
      {positions.map((position: ModalInterface['position']) => {
        return <button key={position} onClick={() => {
          setPosition(position as ModalInterface['position'])
          setIsOpen(true)
        }} style={{
          border: 'black 2px solid',
          padding: '8px 20px',
          borderRadius: '50px',
        }}>Open modal {position}
        </button>
      })}
      <Modal
        isOpen={isOpen}
        ariaLabel="Successfull modal when employee is created."
        onClose={onClose}
        position={position}
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