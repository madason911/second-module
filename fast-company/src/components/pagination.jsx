import Users from "./users";

const Pagination = ({
  onDelete,
  onTheadRemove,
  onPage,
  users,
  count,
  page,
}) => {
  const getClassesForBtn = () => {};
  return (
    <>
      <Users
        onDelete={onDelete}
        onTheadRemove={onTheadRemove}
        users={users}
        count={count}
        page={page}
      />
      <ul className="pagination">
        <li className="page-item">
          <button
            id="btn"
            onClick={onPage}
            className="btn bg-primary text-light fw-bold"
          >
            1
          </button>
        </li>
        <li className="page-item active" aria-current="page">
          <button
            id="btn"
            onClick={onPage}
            className="btn bg-primary text-light fw-bold"
          >
            2
          </button>
        </li>
        <li className="page-item">
          <button
            id="btn"
            onClick={onPage}
            className="btn bg-primary text-light fw-bold"
          >
            3
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
