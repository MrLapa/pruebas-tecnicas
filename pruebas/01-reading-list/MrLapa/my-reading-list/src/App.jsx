/* eslint-disable no-unused-vars */
import classes from "./App.module.css";

import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import BooksList from "./components/BooksList/BooksList";
import useBooks from "./hooks/useBooks";
import useFilters from "./hooks/useFilters";

function App() {
  const { selectedBooks, addBookToReadingList, removeBookFromReadingList } =
    useBooks();
  const { filteredBooks } = useFilters();

  const onClickAddButtonHandler = (ISBN) => {
    addBookToReadingList(ISBN);
  };

  const onClickRemoveButtonHandler = (ISBN) => {
    removeBookFromReadingList(ISBN);
  };

  return (
    <main className={classes["main-wrapper"]}>
      <section className={classes["available-books"]}>
        <section className={classes["header-wrapper"]}>
          <Header
            availableBooks={filteredBooks.length}
            selectedBooks={selectedBooks.length}
          />
          <Filters />
        </section>
        <BooksList
          data={filteredBooks}
          isAddButtonEnabled={true}
          onClickAddButton={onClickAddButtonHandler}
        />
      </section>
      {true && (
        <aside className={classes["selected-books"]}>
          <h2 className={classes.title}>Reading list</h2>
          <BooksList
            data={selectedBooks}
            isRemoveButtonEnabled={true}
            onClickRemoveButton={onClickRemoveButtonHandler}
          />
        </aside>
      )}
    </main>
  );
}

export default App;
