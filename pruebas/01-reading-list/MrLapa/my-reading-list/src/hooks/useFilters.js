import { useContext, useEffect } from "react";
import { FiltersContext } from "../context/FiltersContextProvider";
import { library } from "../../../../books.json";

const useFilters = () => {
  const { contextFilters: filters, setContextFilters } =
    useContext(FiltersContext);

  const { pages: pagesFilter, category: categoryFilter } = filters;

  const setFilters = ({ pages = pagesFilter, category = categoryFilter }) => {
    setContextFilters((prevState) => ({ ...prevState, pages, category }));
  };

  const maxPages = library.reduce((max, { book: { pages } }) => {
    return pages > max ? pages : max;
  }, library[0].book.pages);

  const minPages = library.reduce((max, { book: { pages } }) => {
    return pages < max ? pages : max;
  }, library[0].book.pages);

  useEffect(() => {
    setContextFilters((prevState) => ({ ...prevState, pages: maxPages }));
  }, [maxPages, setContextFilters]);

  const selectedBooks = library.filter(({ book: { pages, genre } }) => {
    return categoryFilter === "all"
      ? pages <= pagesFilter
      : pages <= pagesFilter && genre === categoryFilter;
  });

  return { filters, setFilters, selectedBooks, maxPages, minPages };
};

export default useFilters;
