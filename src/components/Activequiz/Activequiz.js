import React from 'react'
import './Activequiz.sass'
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = (props) => {
    return (
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>2. </strong>
                    {props.question}
                </span>
            </p>
            <AnswersList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
            <small>{props.answerNumber} из {props.quizLength}</small>
        </div>
    )

}

export default ActiveQuiz