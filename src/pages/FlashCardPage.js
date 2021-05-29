import AddFlashCard from '../components/pageComponents/AddFlashCard'

export function FlashCardPage() {
    function sendFlashCardHandler(flashCardData) {
        fetch(
            "https://japan2u-flashcards-default-rtdb.firebaseio.com/flashcard.json",
            {
                method: "POST",
                body: JSON.stringify(flashCardData),
                headers: {
                    "Content-Type" : "application/json"
                }
            }
        )
    }

    return(
        <div style={{marginLeft: '180px' }}>
           <AddFlashCard onAdd={sendFlashCardHandler}/>
        </div>
    )
}

export default FlashCardPage