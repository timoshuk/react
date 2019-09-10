import React from "react";
import "./app.css";
import { withBookstoreService } from "../hoc";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks(bookstoreService));
  return <div>APP</div>;
};

export default withBookstoreService()(App);
