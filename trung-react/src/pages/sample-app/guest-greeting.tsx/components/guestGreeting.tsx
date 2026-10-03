import ButtonSampleApp from "../../../../components/atoms/buttonSampleApp";


interface GuestGreetingProps {
  handleLogin?: () => void;
}

export default  function GuestGreeting ({handleLogin}:GuestGreetingProps){
   return (
       <>
         <h1 className="text-5xl font-bold">Welcome to Tony</h1>
         <ButtonSampleApp onClick={handleLogin}>Logout</ButtonSampleApp>
       </>
     );
}