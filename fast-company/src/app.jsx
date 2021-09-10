import React, { useState } from "react";
import api from "./API";
import Pagination from "./components/pagination";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [count, setCount] = useState(users.length);
  const [page, setPage] = useState(1);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => {
      return userId !== user._id;
    });
    setUsers(updatedUsers);
    setCount(count - 1);
  };

  const handlePage = (event) => {
    setPage(Number(event.target.textContent));
  };

  const theadRemove = () => {
    if (users.length === 0) {
      const th = document.querySelector("thead");
      if (th) {
        th.remove();
      }
    }
  };

  return (
    <>
      <Pagination
        onDelete={handleDelete}
        onTheadRemove={theadRemove}
        onPage={handlePage}
        users={users}
        count={count}
        page={page}
      />
    </>
  );
};

export default App;
