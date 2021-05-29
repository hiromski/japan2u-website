import classes from "./AddFlashCard.module.css";
import FlashCard from "../ui/FlashCard";


import { Link } from "react-router-dom";
import { useRef} from 'react'

export function AddFlashCard(props) {
    const engWordRef = useRef();
    const jpnWordRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredJpnWord = jpnWordRef.current.value
        const enteredEngWord = engWordRef.current.value

        const flashCardData = {
            engWord: enteredEngWord,
            jpnWord: enteredJpnWord
        }

        props.onAdd(flashCardData)
        window.alert("Flashcard Added!")
        window.location.reload()
    }
  

  return (
    <FlashCard>
      <form onSubmit={submitHandler}>
        <h2 style={{ textAlign: "center" }}>Add FlashCard</h2>
        <ul style={{ listStyle: "none" }}>
          <li>
            <input
              className={classes.inputText}
              required
              id="engword"
              ref={engWordRef}
              placeholder="Enter English word"
            />
          </li>
          <li>
            <textarea
              className={classes.inputArea}
              required
              id="jpnword"
              ref={jpnWordRef}
              placeholder="Enter Japanese word/meaning"
            />
          </li>
          <li>
            <button className={classes.button}> Add </button>
            <Link to="/view-flashcard"> View Flashcards </Link>
          </li>
        </ul>
      </form>
    </FlashCard>
  );
}

export default AddFlashCard;
