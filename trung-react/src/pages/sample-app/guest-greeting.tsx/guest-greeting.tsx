import { useState } from "react";
import UserGreeting from "./mocules/user-greeting";
import GuestGreeting from "./mocules/guest-greeting";

export default function PageGuestGreeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <div>
      {isLoggedIn ? (
        <UserGreeting  text="Welcome to" name="Tony" onLogout={handleLogout} />
      ) : (
        <GuestGreeting text="Please sign up." onLogin={handleLogin} />
      )}
    </div>
  );
}
