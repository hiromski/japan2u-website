import classes from "./FlashCard.module.css";

export function FlashCard(props) {
  return (
    <div>
      <div className={classes.flashcard}>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default FlashCard;
