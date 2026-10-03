import Button from "../../../../components/atoms/button";

interface UserGreetingProps {
  text: string;
  name: string;
  onLogout: () => void;
}

export default function UserGreeting({
  text,
  name,
  onLogout,
}: UserGreetingProps) {
  return (
    <div>
      <h1 className="text-4xl font-extrabold ">
        {text} {name}
      </h1>

      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
}
