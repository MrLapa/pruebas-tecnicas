/* eslint-disable react/prop-types */
import React from "react";
import classes from "./Filters.module.css";
import Range from "../Range/Range";
import Categories from "../Categories/Categories";

const categoryOptions = [
  { value: "Fantasía", text: "Fantasía" },
  { value: "Ciencia ficción", text: "Ciencia ficción" },
  { value: "Zombies", text: "Zombies" },
  { value: "Terror", text: "Terror" },
];

const Filters = ({ defaultValues }) => {
  const { pages, category } = defaultValues;

  const [filters, setFilters] = React.useState({ pages, category });

  const onChangeRangeHandler = (value) => {
    setFilters((prevState) => ({ ...prevState, pages: value }));
  };

  const onChangeCategoriesHandler = (event) => {
    setFilters((prevState) => ({ ...prevState, pages: event.target.value }));
  };

  return (
    <section className={classes.wrapper}>
      <Range
        min={100}
        max={200}
        currentValue={filters.pages}
        label={"Filter by pages"}
        onChange={onChangeRangeHandler}
      />
      <Categories
        data={categoryOptions}
        textLabel={"Filter by category"}
        onChange={onChangeCategoriesHandler}
        defaultValue={filters.category}
      />
    </section>
  );
};

export default Filters;
