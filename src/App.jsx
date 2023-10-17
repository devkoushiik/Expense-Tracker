import NewExpense from "./component/newExpense/NewExpense";
import Expenses from "./component/Expenses/Expenses";
import { useEffect, useState } from "react";

const App = () => {
  // Retrieve the JSON string from local storage and convert it back to an array

  const storedItemBack = () => {
    const storedArrayString = localStorage.getItem("myArray");
    const storedArray = JSON.parse(storedArrayString);
    return storedArray;
  };

  // const dummy = storedItemBack();
  const [expenses, setExpenses] = useState(storedItemBack());

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // Convert the array to a JSON string and store it
  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(expenses));
  }, [expenses]);

  // delete
  const onDeleteHanlder = (id) => {
    const newArr = expenses?.filter((item) => item.id != id);
    setExpenses(newArr);
  };
  return (
    <div>
      <h1 className="text-center text-white font-bold text-4xl my-10">
        Expense Tracker
      </h1>
      <NewExpense onSaveExpense={addExpenseHandler} />
      <Expenses onDelete={onDeleteHanlder} items={expenses} />
    </div>
  );
};
export default App;
