import { transactions } from '../data/financeData.js'

function Dashboard() {

  // Calculate total income
  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0)

  // Calculate total expenses
  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0)

  // Calculate balance
  const balance = totalIncome - totalExpenses

  return (
    <div className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, Sufiyan 👋</h1>
          <p>Here's what's happening with your money today.</p>
        </div>
      </div>


      {/* Summary Cards */}
      <div className="summary-grid">

        {/* Balance */}
        <div className="summary-card balance-card">

          <div className="card-top">
            <p>Total Balance</p>
            <span className="card-icon">💰</span>
          </div>

          <h2>${balance.toFixed(2)}</h2>

          <span className="card-description">
            Available balance
          </span>

        </div>


        {/* Income */}
        <div className="summary-card income-card">

          <div className="card-top">
            <p>Total Income</p>
            <span className="card-icon">📈</span>
          </div>

          <h2>${totalIncome.toFixed(2)}</h2>

          <span className="card-description">
            Money received
          </span>

        </div>


        {/* Expenses */}
        <div className="summary-card expense-card">

          <div className="card-top">
            <p>Total Expenses</p>
            <span className="card-icon">📉</span>
          </div>

          <h2>${totalExpenses.toFixed(2)}</h2>

          <span className="card-description">
            Money spent
          </span>

        </div>

      </div>


      {/* Recent Transactions */}
      <div className="transactions-card">

        <div className="section-header">
          <div>
            <h2>Recent Transactions</h2>
            <p>Your latest financial activity</p>
          </div>
        </div>


        <div className="transaction-list">

          {transactions.map(transaction => (

            <div
              className="transaction-item"
              key={transaction.id}
            >

              <div className="transaction-left">

                <div className="transaction-icon">
                  {transaction.type === 'income' ? '↓' : '↑'}
                </div>

                <div>
                  <h3>{transaction.title}</h3>
                  <p>{transaction.category}</p>
                </div>

              </div>


              <div className="transaction-right">

                <strong
                  className={
                    transaction.type === 'income'
                      ? 'income-amount'
                      : 'expense-amount'
                  }
                >
                  {transaction.type === 'income' ? '+' : '-'}
                  ${transaction.amount.toFixed(2)}
                </strong>

                <p>{transaction.date}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Dashboard