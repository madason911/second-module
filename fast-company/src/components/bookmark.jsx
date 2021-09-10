const Bookmark = () => {
  const choiceChanger = (event) => {
    let currentNode;
    const classes = "bi bi-bookmark";
    const fillClasses = "bi bi-bookmark-fill";
    const { target } = event;
    if (target?.firstChild) {
      currentNode = target.firstChild;
    } else {
      currentNode = target;
    }
    if (currentNode.classList.contains("bi-bookmark")) {
      currentNode.className = fillClasses;
    } else {
      currentNode.className = classes;
    }
  };
  return (
    <td>
      <button onClick={choiceChanger} className="btn btn-outline-secondary">
        <i className="bi bi-bookmark"></i>
      </button>
    </td>
  );
};

export default Bookmark;
