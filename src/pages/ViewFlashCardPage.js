import { useEffect, useState } from "react";
import FlashCardList from "../components/pageComponents/FlashCardList";

export function ViewFlashCardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedFlashCards, setLoadedFlashCards] = useState([]);

  useEffect(() => {
    fetch(
      "https://japan2u-flashcards-default-rtdb.firebaseio.com/flashcard.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const flashCards = [];

        for (const key in data) {
          const flashCard = {
            id: key,
            ...data[key],
          };
          flashCards.push(flashCard);
        }
        setIsLoading(false)
        setLoadedFlashCards(flashCards)
      });
  }, []);
  
  if(isLoading) {
      return (
        <section>
        <p>Loading....</p>
      </section>
      )
  }
  return (
      <section>
          <h1>Flash Card List</h1>
          <FlashCardList flashCards={LoadedFlashCards} />
      </section>
  );
}

export default ViewFlashCardPage;
