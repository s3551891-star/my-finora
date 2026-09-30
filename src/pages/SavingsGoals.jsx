import { savingsGoals } from '../data/financeData.js'

function SavingsGoals() {

  const totalTarget = savingsGoals.reduce(
    (total, goal) => total + goal.target,
    0
  )

  const totalSaved = savingsGoals.reduce(
    (total, goal) => total + goal.saved,
    0
  )

  const totalRemaining = totalTarget - totalSaved

  return (
    <div className="savings-page">

      <div className="page-header">

        <div>
          <h1>Savings Goals</h1>
          <p>Track your progress toward your financial goals.</p>
        </div>

        <button className="add-goal-button">
          + Add Goal
        </button>

      </div>


      <div className="savings-summary-grid">

        <div className="savings-summary-card">
          <p>Total Target</p>
          <h2>${totalTarget.toFixed(2)}</h2>
        </div>

        <div className="savings-summary-card">
          <p>Total Saved</p>
          <h2>${totalSaved.toFixed(2)}</h2>
        </div>

        <div className="savings-summary-card">
          <p>Remaining</p>
          <h2>${totalRemaining.toFixed(2)}</h2>
        </div>

      </div>


      <div className="savings-goals-list">

        {savingsGoals.map((goal) => {

          const percentage =
            (goal.saved / goal.target) * 100

          const remaining =
            goal.target - goal.saved

          return (
            <div
              className="savings-goal-card"
              key={goal.id}
            >

              <div className="savings-goal-header">

                <div>
                  <h2>{goal.name}</h2>
                  <p>Deadline: {goal.deadline}</p>
                </div>

                <strong>
                  {percentage.toFixed(0)}%
                </strong>

              </div>


              <div className="savings-progress">

                <div
                  className="savings-progress-bar"
                  style={{
                    width: `${Math.min(percentage, 100)}%`
                  }}
                ></div>

              </div>


              <div className="savings-goal-details">

                <div>
                  <span>Saved</span>
                  <strong>
                    ${goal.saved.toFixed(2)}
                  </strong>
                </div>

                <div>
                  <span>Target</span>
                  <strong>
                    ${goal.target.toFixed(2)}
                  </strong>
                </div>

                <div>
                  <span>Remaining</span>
                  <strong>
                    ${remaining.toFixed(2)}
                  </strong>
                </div>

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default SavingsGoals