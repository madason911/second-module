import React, { PureComponent, useState } from "react";
import api from "../API";

const Users = () => {
  const arrOfAllUsers = api.users.fetchAll();
  const [count, setCount] = useState(arrOfAllUsers.length);

  function deleteHandler(event) {
    const thisRow = event.target.closest("tr");
    if (count === 1) {
      event.target.closest("table").remove();
    }
    if (thisRow) {
      thisRow.remove();
    }
    setCount(count - 1);
  }

  const renderMessage = () => {
    if (count === 0) return "никто с тобой не тусанет";
    return <span>{`${count} человек тусанет с тобой сегодня`}</span>;
  };

  const getBageClasses = () => {
    let classes =
      "p-2 m-1 text-light fw-bold border d-inline-block fs-4 rounded bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const displayRowOfUsers = (user) => {
    const qualities = user.qualities.map((qual) => {
      const spanClasses = `p-1 m-2 bg-${qual.color} text-white fw-bold rounded`;
      return (
        <span key={qual._id} className={spanClasses}>
          {qual.name}
        </span>
      );
    });
    return (
      <tr>
        <td>{user.name}</td>
        <td>{qualities}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>
          <button
            id="btn"
            onClick={deleteHandler}
            className="btn bg-danger text-light"
          >
            delete
          </button>
        </td>
      </tr>
    );
  };

  const allUsers = arrOfAllUsers.map((user) => displayRowOfUsers(user));

  return (
    <>
      <div className={getBageClasses()}>{renderMessage()}</div>
      <table className="table">
        <thead className="border border-start-0 border-top-0 border-2 border-dark">
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился,раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody className="">{allUsers}</tbody>
      </table>
    </>
  );
};

export default Users;
