const SearchStatus = ({ count }) => {
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
  return <div className={getBageClasses()}>{renderMessage()}</div>;
};

export default SearchStatus;
