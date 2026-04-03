import { useState } from "react";
import { transactions } from "../data/data";

export default function Transactions({ role }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // -------------------------
  // 🔍 FILTERING
  // -------------------------

  let filteredData = transactions;

  if (search.trim() !== "") {
    filteredData = filteredData.filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (filter !== "all") {
    filteredData = filteredData.filter((t) => t.type === filter);
  }

  // -------------------------
  // 🎨 UI
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
      <h1>Transactions</h1>

      {/* Controls */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {/* Search */}
        <input
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px" }}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* List */}
      {filteredData.length > 0 ? (
        filteredData.map((t) => (
          <div
            key={t.id}
            style={{
              background: "#1e293b",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Date:</strong> {t.date}
            </p>
            <p>
              <strong>Category:</strong> {t.category}
            </p>
            <p>
              <strong>Amount:</strong> ₹{t.amount}
            </p>
            <p>
              <strong>Type:</strong> {t.type}
            </p>

            {/* 👇 ONLY ADMIN CAN SEE */}
            {role === "admin" && (
              <div style={{ marginTop: "10px" }}>
                <button style={{ padding: "5px 10px", borderRadius: "5px" }}>
                  Edit
                </button>
                <button
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                  }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No transactions found</p>
      )}
    </div>
  );
}
