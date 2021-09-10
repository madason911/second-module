const Qualities = ({ user }) => {
  const getQualities = (user) => {
    const qualities = user.qualities.map((qual) => {
      const spanClasses = `p-1 m-2 bg-${qual.color} text-white fw-bold rounded`;
      return (
        <span key={qual._id} className={spanClasses}>
          {qual.name}
        </span>
      );
    });

    return qualities;
  };
  return <td>{getQualities(user)}</td>;
};

export default Qualities;
