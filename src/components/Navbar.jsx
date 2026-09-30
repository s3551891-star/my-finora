function Navbar() {
  return (
    <header className="navbar">

      {/* Left Side */}
      <div className="navbar-left">
        <h1>Dashboard</h1>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        {/* Notification Button */}
        <button
          className="notification-button"
          type="button"
          aria-label="Notifications"
        >
          🔔
        </button>

        {/* Profile */}
        <div className="profile">

          <div className="profile-avatar">
            S
          </div>

          <div className="profile-info">

            <span className="profile-name">
              Sufiyan
            </span>

            <span className="profile-role">
              Personal Account
            </span>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Navbar