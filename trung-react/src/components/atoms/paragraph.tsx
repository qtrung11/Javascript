import React from "react";

interface ParagraphProps extends React.PropsWithChildren {
  text?: React.ReactNode;
  component: React.ElementType
}

// type ParagraphProps =  React.PropsWithChildren & {
//   text: string;
// }

function Paragraph({ children, component: Component = 'div'}: ParagraphProps) {
  // console.log('Paragraph: ', text)
  return (
    <Component>{children}</Component>
  )
}

export default Paragraph