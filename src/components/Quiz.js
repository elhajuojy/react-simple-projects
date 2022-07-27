import React from 'react';
import Question from './Question';



const Quiz = () => {
    const [questionData, setQuestionData] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    const [finshQuiz, setFinshQuiz] = React.useState(false);
    const [Score, setScore] = React.useState(0);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))
    }, [])


    function setQUestionWithAnswer(data) {
        setAnswers((prev) => prev = [...prev,
            data
        ])

    }

    //i give question id so i can delete the reped 
    var id = 0;
    var questions = questionData.map(item => {
        id = id + 1;
        return <Question data={item} finshQuiz={finshQuiz} id={id} setQUestionWithAnswer={setQUestionWithAnswer} />
    })




    // in this function i need to take an object 
    //of question and his answer
    var CountrightAnswer = 0;
    function btncheckAnswers(answerDatas) {

        var listrightanswers = questionData.map(item => item.correct_answer)

        for (var i = 0; i < 5; i++) {
            console.log(answers[i].question);
            console.log(listrightanswers[i]);
            if (answers[i].question == listrightanswers[i]) {
                CountrightAnswer = CountrightAnswer + 1
            }
        }

        console.log(CountrightAnswer)
        setFinshQuiz((prev) => prev = !prev)
        console.log(CountrightAnswer)
        setScore((prev) => prev = CountrightAnswer)


    }

    return (
        console.log("randers"),
        <div className='Quiz'>
            <div className='questions'>
                {questions}
            </div>

            {finshQuiz ?
                <div className='quiz--btn--answer--div'>
                    <p>{`You scored ${Score}/5 correct answers  `}</p>
                    <button className='quiz--btn--answer btn-try-again' onClick={btncheckAnswers}>try Again</button>
                </div> :
                <div className='quiz--btn--answer--div'>
                    <button className='quiz--btn--answer' onClick={btncheckAnswers}>Check Answer</button>
                </div>
            }


        </div>
    );
};

export default Quiz;