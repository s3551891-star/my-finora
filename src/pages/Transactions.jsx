import { transactions } from '../data/financeData.js'

function Transactions() {

  return (
    <div className="transactions-page">

      <div className="page-header">

        <div>
          <h1>Transactions</h1>
          <p>View and manage your financial transactions.</p>
        </div>

        <button className="add-transaction-button">
          + Add Transaction
        </button>

      </div>


      <div className="transactions-table-card">

        <div className="table-header">

          <h2>All Transactions</h2>

          <span>
            {transactions.length} transactions
          </span>

        </div>


        <div className="transaction-table">

          <div className="table-row table-heading">

            <div>Transaction</div>
            <div>Category</div>
            <div>Date</div>
            <div>Type</div>
            <div>Amount</div>

          </div>


          {transactions.map(transaction => (

            <div
              className="table-row"
              key={transaction.id}
            >

              <div className="transaction-name">

                <div className="table-icon">
                  {transaction.type === 'income' ? '↓' : '↑'}
                </div>

                <strong>
                  {transaction.title}
                </strong>

              </div>


              <div>
                {transaction.category}
              </div>


              <div>
                {transaction.date}
              </div>


              <div>

                <span
                  className={
                    transaction.type === 'income'
                      ? 'type-badge income-badge'
                      : 'type-badge expense-badge'
                  }
                >
                  {transaction.type}
                </span>

              </div>


              <div>

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

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Transactions