import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="h-full w-full">{children}</div>
}

export default Container
