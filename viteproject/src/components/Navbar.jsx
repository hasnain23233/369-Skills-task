import { useContext } from 'react'
import CreateContext from '../context/createContext.jsx'

const Navbar = () => {
  const { logout } = useContext(CreateContext)
  

  return (
    <div>
      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-lg font-semibold text-slate-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-slate-600 sm:block">
          Admin
        </span>

        <button
          onClick={logout}
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Logout
        </button>
      </div>
    </header>
    </div>
  )
}

export default Navbar
