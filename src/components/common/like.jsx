const Like = ({ liked, onClick }) => {
  return (
    <i
      className={liked ? "fas fa-heart" : "far fa-heart"}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
