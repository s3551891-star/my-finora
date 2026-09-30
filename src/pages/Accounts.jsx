import { accounts } from '../data/financeData.js'

function Accounts() {

  const totalBalance = accounts.reduce(
    (total, account) => total + account.balance,
    0
  )

  return (
    <div className="accounts-page">

      <div className="page-header">

        <div>
          <h1>Accounts</h1>
          <p>Manage your bank accounts and financial accounts.</p>
        </div>

        <button className="add-account-button">
          + Add Account
        </button>

      </div>


      <div className="account-summary">

        <div className="account-summary-card">

          <p>Total Account Balance</p>

          <h2>
            ${totalBalance.toFixed(2)}
          </h2>

          <span>
            Across all accounts
          </span>

        </div>

      </div>


      <div className="accounts-grid">

        {accounts.map(account => (

          <div
            className="account-card"
            key={account.id}
          >

            <div className="account-card-top">

              <div className="account-icon">
                $
              </div>

              <button className="account-menu">
                ⋮
              </button>

            </div>


            <div className="account-info">

              <h2>
                {account.name}
              </h2>

              <p>
                {account.type}
              </p>

              <span>
                {account.number}
              </span>

            </div>


            <div className="account-balance">

              <p>Current Balance</p>

              <h3
                className={
                  account.balance >= 0
                    ? 'income-amount'
                    : 'expense-amount'
                }
              >
                ${account.balance.toFixed(2)}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Accounts