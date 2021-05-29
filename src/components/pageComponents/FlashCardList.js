import ViewFlashCard from "./ViewFlashCard";

function FlashCardList(props) {
  return (
    <ul>
      {props.flashCards.map((flashcard) => (
        <ViewFlashCard
          key={flashcard.id}
          id={flashcard.id}
          jpnWord={flashcard.jpnWord}
          engWord={flashcard.engWord}
        />
      ))}
    </ul>
  );
}

export default FlashCardList;
