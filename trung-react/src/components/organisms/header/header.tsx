import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  function handleLogout() {
    window.localStorage.clear();
    navigate("/login")
  }

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <a href="https://prebuiltui.com">
            <img className="h-9" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="dummyLogoColored" />
        </a>
        <div className="flex items-center gap-5 text-gray-500">
            <p>Hi! Admin</p>
            <button className='cursor-pointer border rounded-full text-sm px-4 py-1' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Header