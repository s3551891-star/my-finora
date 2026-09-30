function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>FINORA</h2>
        <p>Personal Finance</p>
      </div>

      <nav className="sidebar-nav">

        <a href="/" className="nav-item">
          Dashboard
        </a>

        <a href="/transactions" className="nav-item">
          Transactions
        </a>

        <a href="/accounts" className="nav-item">
          Accounts
        </a>

        <a href="/budgets" className="nav-item">
          Budgets
        </a>

        <a href="/savings-goals" className="nav-item">
          Savings Goals
        </a>

        <a href="/analytics" className="nav-item">
          Analytics
        </a>

        <a href="/notifications" className="nav-item">
          Notifications
        </a>

      </nav>

      <div className="sidebar-bottom">

        <a href="/settings" className="nav-item">
          Settings
        </a>

      </div>

    </aside>
  )
}

export default Sidebar