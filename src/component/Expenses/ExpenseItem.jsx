import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ date, title, amount, id, onDelete }) => {
  return (
    <Card className="card">
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button
            onClick={() => {
              return onDelete(id);
            }}
            className=" border border-white text-white px-5 py-3 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
