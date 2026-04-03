import { transactions } from "../data/data";

export default function Insights() {
  // -----------------------------
  // 1. CATEGORY TOTAL (DYNAMIC)
  // -----------------------------
  let categoryTotal = {};

  for (let i = 0; i < transactions.length; i++) {
    let t = transactions[i];

    if (t.type === "expense") {
      if (!categoryTotal[t.category]) {
        categoryTotal[t.category] = 0;
      }

      categoryTotal[t.category] += t.amount;
    }
  }

  // -----------------------------
  // 2. HIGHEST CATEGORY
  // -----------------------------
  let highestCategory = "";
  let maxAmount = 0;

  for (let key in categoryTotal) {
    if (categoryTotal[key] > maxAmount) {
      maxAmount = categoryTotal[key];
      highestCategory = key;
    }
  }

  // -----------------------------
  // 3. TOTAL INCOME & EXPENSE
  // -----------------------------
  let totalIncome = 0;
  let totalExpense = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "income") {
      totalIncome += transactions[i].amount;
    }

    if (transactions[i].type === "expense") {
      totalExpense += transactions[i].amount;
    }
  }

  // -----------------------------
  // 4. SIMPLE INSIGHT
  // -----------------------------
  let message = "";

  if (totalExpense > totalIncome) {
    message = "You are spending more than you earn";
  } else {
    message = "You are saving money";
  }

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <div
      style={{
        padding: "20px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>Insights</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {/* Highest Category */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Highest Spending</h3>
          <p>{highestCategory}</p>
          <p>₹{maxAmount}</p>
        </div>

        {/* Monthly Summary */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Monthly Summary</h3>
          <p>Income: ₹{totalIncome}</p>
          <p>Expense: ₹{totalExpense}</p>
        </div>

        {/* Observation */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Observation</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
