import React, { useState } from 'react'

interface ResizableProps {
  width: number
  height: number
}

const withResizable = <P extends ResizableProps>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return function ResizableComponent(props: P) {
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(100)

    const handleResize = (e: React.MouseEvent<HTMLDivElement>) => {
      setWidth(e.clientX)
      setHeight(e.clientY)
    }

    return (
      <div
        className="border p-4 resize bg-gray-200"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseMove={handleResize}
      >
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default withResizable
