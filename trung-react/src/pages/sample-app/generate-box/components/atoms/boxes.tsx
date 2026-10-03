interface boxProps {
  id: number;
  className:string
}

export default function Box({ id , className }: boxProps) {
  return <button className={className}>Box#{id}</button>;
}
