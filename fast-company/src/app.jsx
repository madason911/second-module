import React, { useState } from "react";
import api from "./API";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const [count, setCount] = useState(users.length);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => {
      return userId !== user._id;
    });
    setUsers(updatedUsers);
    setCount(count - 1);
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
    <Users
      onDelete={handleDelete}
      onTheadRemove={theadRemove}
      users={users}
      count={count}
    />
  );
};

export default App;
