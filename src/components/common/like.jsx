const Like = (props) => {
  return (
    <i
      className={props.liked ? "fas fa-heart" : "far fa-heart"}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
