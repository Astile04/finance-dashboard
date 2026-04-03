# 💰 Finance Dashboard UI

## 📌 Overview
This project is a simple and interactive **Finance Dashboard** built using React.  
It helps users track financial data, explore transactions, and understand spending patterns through visualizations.

---

## 🚀 Features

### 📊 Dashboard
- Displays:
  - Total Income
  - Total Expenses
  - Current Balance  
- 📈 Line chart showing balance trend over time  
- 🥧 Pie chart showing spending distribution by category  

---

### 💳 Transactions
- List of all transactions with:
  - Date  
  - Amount  
  - Category  
  - Type (Income / Expense)  

**Features:**
- 🔍 Search by category  
- 🎯 Filter by type (Income / Expense)  

---

### 👥 Role-Based UI (Simulated)
- **Viewer**
  - Can only view data  
- **Admin**
  - Can see additional controls (Edit/Delete buttons)  

➡️ Role can be switched using a dropdown  

---

### 📈 Insights
- Highest spending category (dynamic)  
- Total income vs total expenses  
- Basic financial observations  

---

## 🧠 Approach
- Built using **React functional components**  
- Managed state using `useState`  
- Used basic JavaScript logic (loops, conditionals) for calculations  
- Integrated **Chart.js** for data visualization  
- Used **mock data** (no backend integration)  

---

## 🛠️ Tech Stack
- ⚛️ React (Vite)  
- 🟨 JavaScript  
- 📊 Chart.js  
- 🎨 CSS / Inline Styling  

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Astile04/finance-dashboard.git

# Navigate into the project
cd finance-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
