import Navbar from '../components/Navbar'
import Sidebar from '../components/sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout
