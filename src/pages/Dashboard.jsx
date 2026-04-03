import { transactions } from "../data/data";
import { Line, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function Dashboard() {
  // -------------------------
  // 💰 SIMPLE CALCULATIONS
  // -------------------------

  let income = 0;
  let expense = 0;
  let total = 0;
  let runningBalance = [];

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
      total += t.amount;
    } else {
      expense += t.amount;
      total -= t.amount;
    }

    // prevent negative
    if (total < 0) total = 0;

    runningBalance.push(total);
  });

  const balance = income - expense;

  // -------------------------
  // 📈 LINE CHART
  // -------------------------

  const lineData = {
    labels: transactions.map((t) => t.date),
    datasets: [
      {
        label: "",
        data: runningBalance,
        borderColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  // -------------------------
  // 🥧 PIE CHART (CATEGORY)
  // -------------------------

  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!categoryTotals[t.category]) {
        categoryTotals[t.category] = 0;
      }
      categoryTotals[t.category] += t.amount;
    }
  });

  const pieData = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#ef4444",
          "#f97316",
          "#a855f7",
          "#22c55e",
          "#3b82f6",
        ],
      },
    ],
  };

  // -------------------------
  // 🎨 YOUR UI (UNCHANGED)
  // -------------------------

  return (
    <div
      style={{
        padding: "20px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Finance Dashboard
      </h1>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div
          style={{
            background: "#22c55e",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <p>Income</p>
          <h2>₹{income}</h2>
        </div>

        <div
          style={{
            background: "#ef4444",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <p>Expenses</p>
          <h2>₹{expense}</h2>
        </div>

        <div
          style={{
            background: "#3b82f6",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <p>Balance</p>
          <h2>₹{balance}</h2>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        {/* Line Chart */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            flex: 2,
          }}
        >
          <h3>Balance Trend</h3>
          <Line
            data={lineData}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  min: 0,
                },
              },
            }}
          />
        </div>

        {/* Pie Chart */}
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>Spending</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}
