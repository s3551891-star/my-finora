import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

function DashboardLayout({ children }) {
  return (
    <div className="app">

      <Sidebar />

      <div className="main-area">

        <Navbar />

        <main className="main-content">
          {children}
        </main>

      </div>

    </div>
  )
}

export default DashboardLayout