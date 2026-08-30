function Typography({ text = "Typography", className, title, component, component2: Component2, ...restProps }: any) {
  return (
    <div className={className}>
      {text} <br />

      Component: {component} <br />
      Component2: {<Component2>abc</Component2>}
    </div>
  )
}

export default Typography