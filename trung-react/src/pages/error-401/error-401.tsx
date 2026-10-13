import { useNavigate } from "react-router";

function Error401() {
  const navigate = useNavigate();

  function handleGoBack() {
    window.localStorage.clear();
    navigate('/login')
  }

  return (
    <div className="flex flex-col items-center justify-center text-sm h-[400px]">
      <p className="font-medium text-lg text-indigo-500">401 Unauthorize</p>
      <p className="text-base mt-4 text-gray-500">Please login.</p>
        <div className="flex items-center gap-4 mt-6">
            <button type="button" onClick={handleGoBack} className="bg-indigo-500 hover:bg-indigo-600 px-7 py-2.5 text-white rounded active:scale-95 transition-all">
                Go back login
            </button>
        </div>
    </div>
  );
}

export default Error401