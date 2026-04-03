import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
function App() {
  const [page, setPage] = useState("dashboard");
  const [role, setRole] = useState("viewer");

  const buttonStyle = (active) => ({
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    background: active ? "#3b82f6" : "#1e293b",
    color: "white",
  });

  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "white" }}>
      {/* Navbar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // 👈 key line
          alignItems: "center",
          padding: "15px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        {/* LEFT SIDE (buttons) */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={buttonStyle(page === "dashboard")}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            style={buttonStyle(page === "transactions")}
            onClick={() => setPage("transactions")}
          >
            Transactions
          </button>

          <button
            style={buttonStyle(page === "insights")}
            onClick={() => setPage("insights")}
          >
            Insights
          </button>
        </div>

        {/* RIGHT SIDE (role) */}
        <div>
          <label style={{ marginRight: "8px" }}>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              background: "#1e293b",
              color: "white",
              border: "none",
            }}
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {/* Pages */}
      {page === "dashboard" && <Dashboard />}
      {page === "transactions" && <Transactions role={role} />}
      {page === "insights" && <Insights />}
    </div>
  );
}

export default App;
