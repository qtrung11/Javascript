import React from "react";
import Button from "../../components/atoms/button";
import Paragraph from "../../components/atoms/paragraph";

function Components() {
  const [count, setCount] = React.useState(1);

  // function always re-created each on component re-render
  function increment() {
    setCount((prevState) => {
      return prevState + 1
    })
  }

  console.log("component render")
  return (
    <div>
      <h1 className="text-2xl font-bold">Component</h1>
      <Paragraph
        component="h2"
      >
        Count: {count} <br />
      </Paragraph>
      
      <Button
        onClick={increment}
      >
        Incremenet
      </Button>
    
    </div>
  )
}

export default Components;