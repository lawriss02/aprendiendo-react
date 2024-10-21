import { useState } from 'react'

export function ExerciseCard ({ enunciado, exercise_input, answer, initialAnswer, id }) {

    const [showingAnswer, setAnswer] = useState(initialAnswer)
    
    const showAnswerClick = () => {

        setAnswer(!showingAnswer);
        const cardElement = document.getElementById(id);

        for (let i = 0; i < answer.length; i++) {
            const inputElement = cardElement.getElementsByTagName("input")[i];
            if (showingAnswer) {
                inputElement.value = answer[i]; // Use value instead of innerHTML
            } else {
                inputElement.value = ""; // Clear the input
            }
            inputElement.classList.toggle('is-answer');
        }

        console.log(cardElement.getElementsByClassName('ex-card-button'));
        const cardElement_one = cardElement.getElementsByClassName('ex-card-button')[0];
        if (showingAnswer){
            cardElement_one.style.visibility = "hidden";
        }else{
            cardElement_one.style.visibility = "visible";  
        }
    }

    const showCorrection = () => {
        let correctAnswers = 0;
        for (let i = 0; i < answer.length; i++) {
            const cardElement = document.getElementById(id)
            const inputElement = cardElement.getElementsByTagName("input")[i];
            if (inputElement.value == answer[i]){
                correctAnswers++
            }
        }
        if (correctAnswers==answer.length){
            alert("FANTASTIC! CORRECT ANSWERS")
        } else{
            alert("ERROR! WRONG ANSWERS")
        }
    }


    return(
        <div id={id} className='ex-card' style={{ visibility: 'hidden' }}>
            <h1>Exercise {id}: </h1>
            <p>{enunciado}</p>

            <div className='ex-card-content'>
                {exercise_input}
                <button className={'ex-card-content-button'} onClick={showAnswerClick}>Show Answer</button>
            </div>
            
            <button className='ex-card-button' onClick={showCorrection}>Submit Answer {'>'} </button>
        </div>
        

    )
}
