import React from 'react';
import Answer from './Answer';


const Question = (props) => {

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    var btnarry = props.data.incorrect_answers;
    btnarry = [...btnarry, props.data.correct_answer]
    shuffle(btnarry)

    console.log(typeof btnarry)
    const btns = btnarry.map((item) => {
        return <Answer text={item} />
    })

    return (
        <div className='question'>
            <p className='question-text'>{props.data.question.split("&quot;")}</p>
            <div className='answers'>
                {btns}
            </div>
            <hr />
        </div>
    );
};

export default Question;