/* eslint-disable react/prop-types */
import React from "react";
import classes from "./BooksList.module.css";
import Book from "../Book/Book";

const BooksList = ({
  data,
  isAddButtonEnabled = false,
  isRemoveButtonEnabled = false,
  onClickAddButton = () => {},
  onClickRemoveButton = () => {},
}) => {
  return (
    <section className={classes["wrapper"]}>
      {data &&
        data.map(({ book: { cover, ISBN, title } }) => (
          <Book
            key={ISBN}
            imgSource={cover}
            imgText={title}
            isAddButtonVisible={isAddButtonEnabled}
            isCloseButtonVisible={isRemoveButtonEnabled}
            onClickAddButton={onClickAddButton}
            onClickRemoveButton={onClickRemoveButton}
          />
        ))}
    </section>
  );
};

export default BooksList;
