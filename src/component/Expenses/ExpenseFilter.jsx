import "./ExpenseFilter.css";
const ExpenseFilter = ({ onExpenseFilter, selected }) => {
  const dropDownChangeHanlder = (e) => {
    let value = e.target.value;
    onExpenseFilter(value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} name="" id="" onChange={dropDownChangeHanlder}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
