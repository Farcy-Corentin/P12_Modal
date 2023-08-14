import { ReactNode, useEffect, useRef } from 'react'

/**
 * A component representing a close button for modals.
 * @param onClose - Function called when the button is clicked to close the modal.
 * @param className - Custom CSS class to apply to the button.
 * @param border - Style of the button border ('none', 'px', 'sm').
 * @param borderColor - Color of the button border ('base', 'neutral').
 * @param borderRadius - Button border radius ('none', 'md', 'full').
 * @param backgroundColor - Button background color (used for CSS classes).
 * @param color - Button text and icon color.
 * @param children - Content of the button (React children elements).
 * @param arialLabel - Alternative text for accessibility (default: 'close button').
 */
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
    arialLabel = 'close modal button',
  }: {
    /** A function to close the modal when triggered. */
    onClose: () => void,
    /** Additional CSS classes to be applied to the modal. (Optional) */
    className?: string,
    /**
     * Style of the button border ('none', 'px', 'sm').
     */
    border?: string,
    /**
     * Color of the button border ('base', 'neutral').
     */
    borderColor?: string,
    /**
     * Button border radius ('none', 'md', 'full').
     */
    borderRadius?: string,
    /**
     * Button background color (used for CSS classes).
     */
    backgroundColor?: {
      className: string,
    }
    /**
     * Button text and icon color.
     */
    color?: string,
    /**
     * Content of the button (React children elements).
     */
    children: ReactNode,
    /**
     * Alternative text for accessibility (default: 'close modal button').
     */
    arialLabel?: string,
  }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (closeButtonRef && closeButtonRef.current) {
      closeButtonRef.current.focus()
    }
  }, [])



  const style = {
    base: 'absolute top-1 right-1 py-2 px-4 pointer text-xl transition ease-in-out delay-100 duration-200',
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
      ref={closeButtonRef}
      tabIndex={0}
    >
      {children}
    </button>
  )
}