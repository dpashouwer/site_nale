import React from 'react'

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
