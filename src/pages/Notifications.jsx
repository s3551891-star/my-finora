function Notifications() {
  const notifications = [
    {
      id: 1,
      title: 'Salary received',
      message: 'Your salary of $5,000 has been added to your account.',
      time: '2 hours ago',
      type: 'income',
    },
    {
      id: 2,
      title: 'Budget alert',
      message: 'Your Food & Dining budget has reached 53%.',
      time: '5 hours ago',
      type: 'warning',
    },
    {
      id: 3,
      title: 'Savings progress',
      message: 'You are making good progress toward your Emergency Fund.',
      time: 'Yesterday',
      type: 'success',
    },
    {
      id: 4,
      title: 'Bill reminder',
      message: 'Your upcoming electricity bill is due soon.',
      time: 'Yesterday',
      type: 'bill',
    },
  ]

  return (
    <div className="notifications-page">

      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>Stay updated with your financial activity.</p>
        </div>

        <button className="mark-read-button">
          Mark all as read
        </button>
      </div>

      <div className="notifications-card">

        {notifications.map((notification) => (
          <div
            className="notification-item"
            key={notification.id}
          >

            <div className={`notification-icon ${notification.type}`}>
              {notification.type === 'income' && '↓'}
              {notification.type === 'warning' && '!'}
              {notification.type === 'success' && '✓'}
              {notification.type === 'bill' && '₿'}
            </div>

            <div className="notification-content">
              <h3>{notification.title}</h3>
              <p>{notification.message}</p>
              <span>{notification.time}</span>
            </div>

            <div className="notification-status"></div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Notifications