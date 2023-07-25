/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ availableBooks, selectedBooks = 0 }) => {
  return (
    <header>
      <h1>{availableBooks} available books</h1>
      <p>{selectedBooks} in the reading list</p>
    </header>
  );
};

export default Header;
