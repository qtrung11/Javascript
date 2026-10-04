
import boxStyles  from "./box.module.css"
import { useState } from "react";


/*
boxs: [1, 2, 3, 4, 5]
colors: ['red', 'blue', 'green', 'yellow', 'orange']

// TODO:
boxs: [
  { id: 1, title: 'Box 1', color: 'xxx' },
  { id: 2, title: 'Box 2', color: 'xxxx' }
]
*/

export default function GenerateBox() {
  const [input, setInput] = useState(10);
  const [numberOfBoxes,setNumberOfBoxes] = useState(10)
  const [colors, setColors] = useState<string[]>([]);
 


  function generateBoxes() {
    const number = Number(input);

    if (number < 0 || number > 128 || Number.isNaN(number)) {
      return;
    }

    setNumberOfBoxes(number);
    setColors([]);
  }


  function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  }

  function changeBoxColor(index: number) {
    const newColors = [...colors];

    newColors[index] = getRandomColor();

    setColors(newColors);
  }

  const boxes = Array.from({ length: numberOfBoxes });

  return (
   <>
     <h1 className="text-4xl font-extrabold ">Sample App - Generate Box</h1>
    <h2>Number of boxes: </h2>
     <input min="0" max="128" type="number" placeholder="enter number 1-128" value={input} onChange={(event) => setInput(Number(event.target.value))}/>
    <button className="border" type="button" onClick={generateBoxes}>Generate</button>

    {numberOfBoxes === 0 ? (
        <p>no box</p>
      ) : (
        <div className={boxStyles.boxList}>
          {boxes.map((_, index) => (
            <button
              key={index}
              type="button"
              className={boxStyles.box}
              style={{
                backgroundColor: colors[index] || "antiquewhite",
              }}
              onClick={() => changeBoxColor(index)}
            >
              Box #{index + 1}
            </button>
          ))}
        </div>
      )}
   </>
  );
}
