import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date,
    };

    onSaveExpenseData(expenseData);

    // clearing the field
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      {toggle && (
        <form onSubmit={handleSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="">Title</label>
              <input
                required
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="new-expense__control">
              <label htmlFor="">Amount</label>
              <input
                required
                type="text"
                min={"0.01"}
                step={"0.01"}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="new-expense__control">
              <label htmlFor="">Date</label>
              <input
                required
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="new-expense__action ">
            <button type="submit">Add Button</button>
            <button onClick={() => setToggle(() => false)}>Cancel</button>
          </div>
        </form>
      )}
      <div className="new-expense__action ">
        {!toggle ? (
          <button onClick={() => setToggle((t) => !t)}>Add New Expenses</button>
        ) : null}
      </div>
    </div>
  );
};
export default ExpenseForm;
