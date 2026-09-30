import { transactions, budgets, savingsGoals } from '../data/financeData.js'

function Analytics() {

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const totalExpenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0)

  const netSavings = totalIncome - totalExpenses

  const totalBudget = budgets.reduce(
    (total, budget) => total + budget.limit,
    0
  )

  const totalBudgetSpent = budgets.reduce(
    (total, budget) => total + budget.spent,
    0
  )

  const totalSavingsTarget = savingsGoals.reduce(
    (total, goal) => total + goal.target,
    0
  )

  const totalSavings = savingsGoals.reduce(
    (total, goal) => total + goal.saved,
    0
  )

  return (
    <div className="analytics-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h1>Analytics</h1>
          <p>
            Understand your financial performance and spending patterns.
          </p>
        </div>

      </div>


      {/* Main Statistics */}

      <div className="analytics-summary-grid">

        <div className="analytics-card">
          <p>Total Income</p>
          <h2>${totalIncome.toFixed(2)}</h2>
          <span>Money received</span>
        </div>


        <div className="analytics-card">
          <p>Total Expenses</p>
          <h2>${totalExpenses.toFixed(2)}</h2>
          <span>Money spent</span>
        </div>


        <div className="analytics-card">
          <p>Net Savings</p>
          <h2>${netSavings.toFixed(2)}</h2>
          <span>Income minus expenses</span>
        </div>

      </div>


      {/* Financial Overview */}

      <div className="analytics-grid">

        <div className="analytics-panel">

          <div className="analytics-panel-header">
            <h2>Budget Overview</h2>
            <span>Monthly</span>
          </div>

          <div className="analytics-stat-row">

            <span>Total Budget</span>

            <strong>
              ${totalBudget.toFixed(2)}
            </strong>

          </div>


          <div className="analytics-stat-row">

            <span>Amount Spent</span>

            <strong>
              ${totalBudgetSpent.toFixed(2)}
            </strong>

          </div>


          <div className="analytics-stat-row">

            <span>Remaining</span>

            <strong>
              ${(totalBudget - totalBudgetSpent).toFixed(2)}
            </strong>

          </div>


          <div className="analytics-progress">

            <div
              className="analytics-progress-bar"
              style={{
                width: `${Math.min(
                  (totalBudgetSpent / totalBudget) * 100,
                  100
                )}%`
              }}
            ></div>

          </div>

        </div>


        <div className="analytics-panel">

          <div className="analytics-panel-header">
            <h2>Savings Progress</h2>
            <span>Overall</span>
          </div>

          <div className="analytics-stat-row">

            <span>Total Target</span>

            <strong>
              ${totalSavingsTarget.toFixed(2)}
            </strong>

          </div>


          <div className="analytics-stat-row">

            <span>Total Saved</span>

            <strong>
              ${totalSavings.toFixed(2)}
            </strong>

          </div>


          <div className="analytics-stat-row">

            <span>Remaining</span>

            <strong>
              ${(totalSavingsTarget - totalSavings).toFixed(2)}
            </strong>

          </div>


          <div className="analytics-progress">

            <div
              className="analytics-progress-bar"
              style={{
                width: `${Math.min(
                  (totalSavings / totalSavingsTarget) * 100,
                  100
                )}%`
              }}
            ></div>

          </div>

        </div>

      </div>


      {/* Expense Breakdown */}

      <div className="analytics-panel expense-breakdown">

        <div className="analytics-panel-header">
          <div>
            <h2>Expense Breakdown</h2>
            <p>Your current spending by category</p>
          </div>
        </div>


        {transactions
          .filter(transaction => transaction.type === 'expense')
          .map(transaction => {

            const percentage =
              (transaction.amount / totalExpenses) * 100

            return (
              <div
                className="expense-row"
                key={transaction.id}
              >

                <div className="expense-row-info">

                  <span>
                    {transaction.category}
                  </span>

                  <strong>
                    ${transaction.amount.toFixed(2)}
                  </strong>

                </div>


                <div className="expense-bar">

                  <div
                    className="expense-bar-fill"
                    style={{
                      width: `${percentage}%`
                    }}
                  ></div>

                </div>

              </div>
            )
          })}

      </div>

    </div>
  )
}

export default Analytics