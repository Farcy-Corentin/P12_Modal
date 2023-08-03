import React from 'react'
import { ReactNode } from 'react'

export default function ModalCloseButton(
  {
    onClose,
    className = '',
    border = 'none',
    borderColor = 'base',
    borderRadius = 'md',
    backgroundColor = {
      className: 'transparent',
    },
    color = 'text-gray-400 hover:text-black',
    children,
    arialLabel = 'close button',
  }: {
    onClose: () => void
    className?: string
    border?: string
    borderColor?: string
    borderRadius?: string
    backgroundColor?: {
      className: string
    }
    color?: string
    children: ReactNode,
    arialLabel?: string,
  }) {
  const style = {
    base: 'absolute top-0 right-2 py-2 px-4 pointer text-xl transition ease-in-out delay-100 duration-200',
    color: color,
    backgroundColor: {
      className: backgroundColor.className,
    },
    border: {
      none: 'border-none',
      px: 'border',
      sm: 'border-2',
    },
    borderColor: {
      base: 'border-black',
      neutral: 'border-neutral-400',
    },
    borderRadius: {
      none: 'rounded-none',
      md: 'rounded-md',
      full: 'rounded-full',
    },
  }

  return (
    <button
      className={
        `${style.base} ${className} ${style.color} ${style.backgroundColor['className' as keyof typeof style.backgroundColor]} ${style.border[border as keyof typeof style.border]} ${style.borderColor[borderColor as keyof typeof style.borderColor]} ${style.borderRadius[borderRadius as keyof typeof style.borderRadius]}`
      }
      onClick={onClose}
      aria-label={arialLabel}
    >
      {children}
    </button>
  )
}