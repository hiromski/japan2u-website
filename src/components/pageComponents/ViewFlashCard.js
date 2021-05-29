import classes from './ViewFlashCard.module.css'
import FlashCard from '../ui/FlashCard'

function ViewFlashCard(props) {
    function deleteHandler() {
        fetch(
            `https://japan2u-flashcards-default-rtdb.firebaseio.com/flashcard/${props.id}.json`,
            {
                method: "DELETE"
            },
        ).then(() => {
            window.location.reload()
        })
    }

    return(
      <li style={{ listStyle: "none" }}>
          <FlashCard>
            <h3 className={classes.word}>
                {props.engWord}
            </h3>
            <div  className={classes.word}>
                {props.jpnWord}
            </div>
            <button className={classes.button} onClick={deleteHandler}>Delete</button>
          </FlashCard>
      </li>
    )

}

export default ViewFlashCard