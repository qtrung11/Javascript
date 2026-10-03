import ButtonSampleApp from "../../../../components/atoms/buttonSampleApp";



interface UserGreetingProps {
  handleLogout?: () => void;
}
export default function UserGreeting({handleLogout}:UserGreetingProps) {
  return (
    <>
      <h1 className="text-5xl font-bold">Please sign up</h1>
      <ButtonSampleApp onClick={handleLogout}>Login</ButtonSampleApp>
    </>
  );
}
