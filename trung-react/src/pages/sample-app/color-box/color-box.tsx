import React from "react"

interface Box {
  id: number,
  title: string,
  bgColor: string
}

function ColorBox() {
  const [currentColor, setCurrentColor] = React.useState<string | null>(null);
  const [boxs] = React.useState<Box[]>([
    {
      id: 1,
      title: 'red',
      bgColor: 'red'
    },
    {
      id: 2,
      title: 'yellow',
      bgColor: 'yellow'
    },
    {
      id: 3,
      title: 'aqua',
      bgColor: 'aqua'
    },
    {
      id: 4,
      title: 'purple',
      bgColor: 'purple'
    }
  ])

  function handleChangeColor(box: Box) {
    if (currentColor === box.bgColor) {
      setCurrentColor(null);
      return;
    }
    setCurrentColor(box.bgColor)
  }

  return (
    <div>
      <div>
        Current color: {currentColor || 'Default'}
      </div>
      <div className="boxColor">
        {boxs.map(box => {
          return (
            <div 
              key={box.id} 
              className={box.bgColor}
              style={{
                backgroundColor: currentColor === box.bgColor ? box.bgColor : currentColor
              }}
              onClick={() => handleChangeColor(box)}
            >
              {box.title}
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default ColorBox