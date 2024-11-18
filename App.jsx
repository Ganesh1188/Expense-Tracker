import React, { useState } from "react";

export default function App() {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const handleButton = () => {
    if (!description || !amount) {
      alert("fill all the field");
    }
     const newExpence={
      id:Date.now(),
      description,
      amount:parseFloat(amount)
     };

     setExpenses([...expenses,newExpence]);
     setTotal(total + newExpence.amount);

     setDescription("");
     setAmount("");
     
  };
  const handleDelete = (id) => {
  
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);

 
    const removedExpense = expenses.find((expense) => expense.id === id);
    if (removedExpense) {
      setTotal(total - removedExpense.amount); 
    }
  };
  return (
    <center>
      <h1>Expence Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <button onClick={handleButton}>Add</button>
      </div>
      <h2>Total Expenditure : $ {total}</h2>
      <h1>Expenses</h1>
      <ul>
        {expenses.map((expence) => (
          <li>
            <span>{expence.description}-{expence.amount}</span>
             <button onClick={()=>handleDelete(expence.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </center>
  );
}
