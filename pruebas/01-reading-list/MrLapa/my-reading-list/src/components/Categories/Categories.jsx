/* eslint-disable react/prop-types */
import classes from "./Categories.module.css";

const Categories = ({ textLabel, onChange, data, defaultValue }) => {
  return (
    <div className={classes.wrapper}>
      <label htmlFor="categories">{textLabel}</label>
      <select
        name="categories"
        id="categories"
        onChange={onChange}
        value={defaultValue}
      >
        <option key="all" value="all">
          All
        </option>
        {data.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;