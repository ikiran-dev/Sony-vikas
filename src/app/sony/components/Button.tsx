import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-900 hover:text-gray-300 transition duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

