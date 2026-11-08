import React from "react"

// function InputField({ ...restProps }) {
//   const [text, setText] = React.useState('')

//   console.log('InputField: ', text)
//   return (
//     <input value={text} onChange={(e) => setText(e.target.value)} {...restProps} />
//   )
// }

const InputField = React.forwardRef((props, ref) => {
  const inputField = React.useRef<any>(null);
  const [text, setText] = React.useState('');

  React.useImperativeHandle(ref, () => {
    return {
      updateBackground: () => {
        console.log('updateBackground')
      },
      getText: () => {
        return text
      },
      focus: () => {
        inputField.current.focus()
      }
      // ...
    }
  })

  return (
    <input ref={inputField} value={text} onChange={(e) => setText(e.target.value)} />
  )
});

export default InputField