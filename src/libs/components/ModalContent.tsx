import { ReactNode } from 'react'

export default function ModalContent(
  {
    classname,
    children,
    dividers= false,
  }: {
    classname?: string,
    dividers?: boolean,
    children: ReactNode,
  }) {
  const style = {
    base: 'p-6',
    dividers: 'border-t border-b border-gray-300',
  }

  return (
    <div className={`${style.base} ${classname ?? ''} ${dividers ? style.dividers : ''}`}>
      {children}
    </div>
  )
}