import UserGreeting from "../../../components/atoms/userGreeting";
import GuestGreeting from "../../../components/atoms/guestGreeting";
import React from "react"
export default function PageGuestGreeting() {
    const [login,setLogin] = React.useState(false)
      function isLogin (){
        setLogin((prevState)=>{
            if (prevState){
                return false
            }else{
                return true
            }
        })
      }
  return (
    <>
      <h1 >Guest Greeting</h1>
        
      <UserGreeting></UserGreeting>
      <GuestGreeting></GuestGreeting>
    </>
  );
}
