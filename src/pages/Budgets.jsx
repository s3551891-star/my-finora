import { budgets } from '../data/financeData.js'

function Budgets() {

  const totalLimit = budgets.reduce(
    (total, budget) => total + budget.limit,
    0
  )

  const totalSpent = budgets.reduce(
    (total, budget) => total + budget.spent,
    0
  )

  const remaining = totalLimit - totalSpent

  return (
    <div className="budgets-page">

      <div className="page-header">

        <div>
          <h1>Budgets</h1>
          <p>Plan and control your monthly spending.</p>
        </div>

        <button className="add-budget-button">
          + Create Budget
        </button>

      </div>


      <div className="budget-summary-grid">

        <div className="budget-summary-card">
          <p>Total Budget</p>
          <h2>${totalLimit.toFixed(2)}</h2>
        </div>

        <div className="budget-summary-card">
          <p>Total Spent</p>
          <h2>${totalSpent.toFixed(2)}</h2>
        </div>

        <div className="budget-summary-card">
          <p>Remaining</p>
          <h2>${remaining.toFixed(2)}</h2>
        </div>

      </div>


      <div className="budgets-list">

        {budgets.map((budget) => {

          const percentage =
            (budget.spent / budget.limit) * 100

          const remainingAmount =
            budget.limit - budget.spent

          return (
            <div
              className="budget-card"
              key={budget.id}
            >

              <div className="budget-card-header">

                <div>
                  <h2>{budget.category}</h2>
                  <p>
                    ${budget.spent.toFixed(2)} spent of $
                    {budget.limit.toFixed(2)}
                  </p>
                </div>

                <strong>
                  {percentage.toFixed(0)}%
                </strong>

              </div>


              <div className="budget-progress">

                <div
                  className="budget-progress-bar"
                  style={{
                    width: `${Math.min(percentage, 100)}%`
                  }}
                ></div>

              </div>


              <div className="budget-footer">

                <span>
                  ${remainingAmount.toFixed(2)} remaining
                </span>

                <span>
                  Limit: ${budget.limit.toFixed(2)}
                </span>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Budgets