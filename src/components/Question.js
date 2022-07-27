import React from 'react';
import Answer from './Answer';
import sanitizeHtml from 'sanitize-html';


const Question = (props) => {

    const [click, chnageClick] = React.useState("");
    const [answers, setAnswer] = React.useState("");

    // hard coded function for shaffling an array of question 
    var btnarry = props.data.incorrect_answers;
    btnarry = [...btnarry, props.data.correct_answer]


    // this function need to handel click on 
    // question and chose one Question and change class name 

    function handelCheckAnswer(event) {
        const { value } = event.target
        setAnswer((prev) => prev = value)
        chnageClick((prev) => prev = !prev)
        props.setQUestionWithAnswer(
            {
                id: props.id,
                question: value
            }
        )

        chnageClick((prev) => prev = value)
        console.log(`after QuestionSet ${props.data.question} => ${value}`)
        console.log(click)

    }

    const btns = btnarry.map((item) => {
        return <Answer isfinsh={props.finshQuiz} key={item.id} text={item} handelCheckAnswer={() => handelCheckAnswer} click={click} />
    })
    console.log(props.data.correct_answer)
    // sanitizeHtml
    return (
        <div className='question'>
            <p className='question-text'>{sanitizeHtml(props.data.question)}</p>
            <div className='answers'>
                {btns}

            </div>
            <hr />
        </div>
    );
};

export default Question;