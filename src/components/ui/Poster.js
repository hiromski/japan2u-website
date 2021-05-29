import classes from "./Poster.module.css";

function Poster(props) {
  return (
    <div>
      <div className={classes.poster}>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Poster;
