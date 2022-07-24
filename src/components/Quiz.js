import React from 'react';
import Question from './Question';



const Quiz = () => {
    const [questionData, setQuestionData] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))
    }, [])

    console.log(questionData)
    var questions = questionData.map(item => {
        return <Question data={item} />
    })

    // in this function i need to take an object 
    //of question and his answer

    function checkAnswers(answerDatas) {

        console.log("CheckAnswers")
    }

    return (
        //rander Questions  s
        <div className='Quiz'>
            <div className='questions'>
                {questions}
            </div>

            <div className='quiz--btn--answer--div'>
                <button className='quiz--btn--answer' onClick={checkAnswers}>Check Answer</button>
            </div>
        </div>
    );
};

export default Quiz;