import { useState } from 'react'

function Settings() {

  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="settings-page">

      <div className="page-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your Finora account and preferences.</p>
        </div>
      </div>

      <div className="settings-grid">

        <div className="settings-card">

          <div className="settings-card-header">
            <h2>Profile Information</h2>
            <p>Manage your personal information.</p>
          </div>

          <div className="settings-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                defaultValue="Sufiyan"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                defaultValue="sufiyan@example.com"
              />
            </div>

            <div className="form-group">
              <label>Account Type</label>
              <input
                type="text"
                defaultValue="Personal Account"
                disabled
              />
            </div>

            <button className="save-settings-button">
              Save Changes
            </button>

          </div>

        </div>


        <div className="settings-card">

          <div className="settings-card-header">
            <h2>Preferences</h2>
            <p>Customize your Finora experience.</p>
          </div>

          <div className="setting-option">

            <div>
              <h3>Email Notifications</h3>
              <p>Receive important financial notifications.</p>
            </div>

            <button
              className={`toggle-button ${
                notifications ? 'toggle-active' : ''
              }`}
              onClick={() => setNotifications(!notifications)}
            >
              <span></span>
            </button>

          </div>

          <div className="setting-option">

            <div>
              <h3>Dark Mode</h3>
              <p>Switch between light and dark appearance.</p>
            </div>

            <button
              className={`toggle-button ${
                darkMode ? 'toggle-active' : ''
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              <span></span>
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Settings