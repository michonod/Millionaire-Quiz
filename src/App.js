import "./App.css";
import React, { useState } from "react";

function App() {
  const [question, setQuestion] = useState(1);
  const moneyList = [
    { id: 15, amount: "$1000000" },
    { id: 14, amount: "$850000" },
    { id: 13, amount: "$720000" },
    { id: 12, amount: "$360000" },
    { id: 11, amount: "$18000" },
    { id: 10, amount: "$90000" },
    { id: 9, amount: "$60000" },
    { id: 8, amount: "$30000" },
    { id: 7, amount: "$25000" },
    { id: 6, amount: "$18000" },
    { id: 5, amount: "$9000" },
    { id: 4, amount: "$6000" },
    { id: 3, amount: "$3000" },
    { id: 2, amount: "$2000" },
    { id: 1, amount: "$1000" },
  ];
  return (
    <div className="app">
      <div className="main">main</div>
      <div className="moneyList">
        <ul className="money">
          {moneyList.map((list) => {
            return (
              <li
                className={
                  question == +list.id ? "money_item active" : "money_item"
                }
              >
                <span className="money_item_number">{list.id}</span>
                <span className="money_item_amount">{list.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
