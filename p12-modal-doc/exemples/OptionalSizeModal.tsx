import { useState } from 'react'
import Modal from '@/components/Modal'

export default function OptionalSizeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState('')

  const sizes = [
    {
      name: 'custom modal',
      value: 'h-[500px] w-full',
    },
    {
      name: 'half modal',
      value: 'h-1/2 w-1/2',
    },
    {
      name: 'fullscreen modal',
      value: 'fullscreen',
    },
  ]

  function onClose() {
    setIsOpen(false)
  }

  return (
    <div className="border rounded-2xl mt-3 p-4 flex flex-col justify-between items-center lg:flex lg:flex-row lg:justify-between lg:items-center" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '200px',
      width: '100%',
    }}>
      {sizes.map((size) => {
        return <button key={size.name} onClick={() => {
          setSize(size.value)
          setIsOpen(true)
        }} style={{
          border: 'black 2px solid',
          padding: '8px 20px',
          borderRadius: '50px',
        }}>Open {size.name}
        </button>
      })}
      <Modal
        isOpen={isOpen}
        ariaLabel="Successfull modal when employee is created."
        onClose={onClose}
        zIndexOverlay="z-40"
        zIndexModal="z-50"
        size={size}
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
