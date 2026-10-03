import Button from "../../../../components/atoms/button";

interface GuestGreetingProps {
  text: string;
  onLogin: () => void;
}

export default function GuestGreeting({ text, onLogin }: GuestGreetingProps) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold ">{text}</h1>

      <Button onClick={onLogin}>Login</Button>
    </div>
  );
}
