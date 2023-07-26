/* eslint-disable no-unused-vars */
import classes from "./App.module.css";

import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import BooksList from "./components/BooksList/BooksList";
import useFilters from "./hooks/useFilters";

function App() {
  const { selectedBooks } = useFilters();

  return (
    <main className={classes["main-wrapper"]}>
      <section className={classes["available-books"]}>
        <section className={classes["header-wrapper"]}>
          <Header availableBooks={100} selectedBooks={7} />
          <Filters />
        </section>
        <BooksList data={selectedBooks} isAddButtonEnabled={true} />
      </section>
      {true && (
        <aside className={classes["selected-books"]}>
          <h2 className={classes.title}>Reading list</h2>
          <BooksList data={selectedBooks} isRemoveButtonEnabled={true} />
        </aside>
      )}
    </main>
  );
}

export default App;
