import Qualities from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, handleDelete }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <Qualities user={user} />
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{`${user.rate}/5`}</td>
      <Bookmark />
      <td>
        <button
          id="btn"
          onClick={() => handleDelete(user._id)}
          className="btn bg-danger text-light"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
