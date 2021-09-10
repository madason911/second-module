import React from "react";
import SearchStatus from "./searchStatus";
import User from "./user";

const Users = ({ onDelete, onTheadRemove, users, count, page }) => {
  let currentArrOfUsers = users.slice(4 * (page - 1), page * 4);
  return (
    <>
      <SearchStatus count={count} />
      <table className="table">
        <thead className="border border-start-0 border-top-0 border-2 border-dark">
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
          </tr>
        </thead>
        <tbody className="">
          {currentArrOfUsers.map((user) => {
            return <User key={user._id} user={user} handleDelete={onDelete} />;
          })}
        </tbody>
      </table>
      {onTheadRemove()}
    </>
  );
};

export default Users;
