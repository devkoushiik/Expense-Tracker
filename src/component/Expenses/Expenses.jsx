import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({ items, onDelete }) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = items?.filter((item) => {
    return new Date(item.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseFilter
          selected={filteredYear}
          onExpenseFilter={filterChangeHandler}
        />
        {items.length < 1 && (
          <p className="text-center text-white my-3 font-bold">
            Please Added Some Items
          </p>
        )}
        {filteredExpenses.length === 0 ? (
          <p className="font-bold text-center text-white py-5">
            No expenses found.
          </p>
        ) : (
          filteredExpenses?.map(({ title, amount, date, id }) => {
            return (
              <div key={Math.random().toString()}>
                <ExpenseItem
                  onDelete={onDelete}
                  id={id}
                  date={date}
                  title={title}
                  amount={amount}
                />
              </div>
            );
          })
        )}
      </Card>
    </div>
  );
};
export default Expenses;
