import React from "react"
import InputField from "./use-imperative-handle/input-field";


/*
- way to access DOM
- always keep information (value) after component re-render
*/
function UseRef() {
  // let count = 1;
  let isSkipFirstRennder = React.useRef(true);
  let countRef = React.useRef(1);
  const firstNameRef = React.useRef<any>(null);
  const [_, setTimestamp] = React.useState(Date.now());
  const [count] = React.useState(1);
  const lastNameRef = React.useRef(null)
  const cityRef = React.useRef(null)

  React.useEffect(() => {
    // background job A not run first-render, only run when component re-render
    if (isSkipFirstRennder.current) {
      isSkipFirstRennder.current = false;
      return
    }
    console.log('useEffect background job A') 
  })

  function submit() {
    // count = count + 1;
    // countRef.current = countRef.current + 1;
    // setCount(prevState => prevState + 1)
    setTimestamp(Date.now());
    
    firstNameRef.current.focus();
    firstNameRef.current.setSelectionRange(0, firstNameRef.current.value.length)
    lastNameRef.current.focus();

    console.log('submit: ', {
      firstNameRef: firstNameRef.current.value,
      lastNameRef: lastNameRef.current.getText(),
      cityRef: cityRef.current.getText()
    })
  }

  console.log('countRef: ', {
    count,
    countRef: countRef.current
  });

  return (
    <div>
      <h1 className='text-3xl'>UseRef</h1>

      First name: <input type="text" ref={firstNameRef} />

      <br /> <br />

      <h2 className="text-3xl">useImperativeHandle</h2>
      Last Name: <InputField ref={lastNameRef} />
      City: <InputField ref={cityRef} />

      <br /> <br />
      <button onClick={submit}>Update</button>

    </div>
  )
}

export default UseRef