import DashboardLayout from './layouts/DashboardLayout.jsx'

import Dashboard from './pages/Dashboard.jsx'
import Transactions from './pages/Transactions.jsx'
import Accounts from './pages/Accounts.jsx'
import Budgets from './pages/Budgets.jsx'
import SavingsGoals from './pages/SavingsGoals.jsx'
import Analytics from './pages/Analytics.jsx'
import Notifications from './pages/Notifications.jsx'
import Settings from './pages/Settings.jsx'

import './App.css'

function App() {

  const path = window.location.pathname

  if (path === '/transactions') {
    return (
      <DashboardLayout>
        <Transactions />
      </DashboardLayout>
    )
  }

  if (path === '/accounts') {
    return (
      <DashboardLayout>
        <Accounts />
      </DashboardLayout>
    )
  }

  if (path === '/budgets') {
    return (
      <DashboardLayout>
        <Budgets />
      </DashboardLayout>
    )
  }

  if (path === '/savings-goals') {
    return (
      <DashboardLayout>
        <SavingsGoals />
      </DashboardLayout>
    )
  }

  if (path === '/analytics') {
    return (
      <DashboardLayout>
        <Analytics />
      </DashboardLayout>
    )
  }

  if (path === '/notifications') {
    return (
      <DashboardLayout>
        <Notifications />
      </DashboardLayout>
    )
  }

  if (path === '/settings') {
    return (
      <DashboardLayout>
        <Settings />
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  )
}

export default App