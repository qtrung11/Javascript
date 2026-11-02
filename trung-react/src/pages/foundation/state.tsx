import React from "react";
import Button from "../../components/atoms/button";

/* render component in jsx
  - PascalCase 
  - <xx> </xxx>
*/

function createNumber() {
  console.log('createNumber')
  return 3;
}

function State() {
  // state
  const [number, setNumber] = React.useState(createNumber); // local state
  const [message, setMessage] = React.useState({
    text: '',
    name: 'trung'
  }); // memory A

  // action
  function increment() {
    setNumber(prevState => prevState + 1)
    setNumber(prevState => prevState + 1)
    setNumber(prevState => prevState + 1)
    setNumber(prevState => prevState + 1)
  
    setMessage(prevState => ({
      ...prevState,
      text: 'Tony' + Date.now(),
    }))
  }

  function updateMessage() {
    // message.text = 'Tony' + Date.now(); // update memory A
    // const newMessage = {
    //   ...message,
    //   text: 'Tony' + Date.now(),
    // }; // copy object, create new memory B
    // setMessage(message); // memory A

    // callback/updater function
    setMessage((prevState) => {
      return {
        ...prevState, // copy all properties
        text: 'Tony' + Date.now(),
      }
    })
  }

  // UI
  return (
    <>
      <h1 className="text-2xl font-bold">State</h1>
      <br />
      <div>
        Number: {number} <br />
        <Button type="button" onClick={increment}>Increment</Button> <br /><br />
        Show message: {message.text} <br />
        <Button type="button" onClick={updateMessage}>Update Message</Button> <br />
      </div>
    </>
  )
}

export default State