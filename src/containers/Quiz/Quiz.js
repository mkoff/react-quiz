import React, { Component } from 'react'
import './Quiz.sass'
import ActiveQuiz from '../../components/Activequiz/Activequiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [
            {
                question: 'Какого цвета ёлка',
                rightAnswerId: 4,
                id: 1,
                answers: [
                    {text: 'Черный',id: 1},
                    {text: 'Синий',id: 2},
                    {text: 'Красный',id: 3},
                    {text: 'Зеленый',id: 4}
                ]
            },
            {
                question: 'В какое время года новый год?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Зима',id: 1},
                    {text: 'Лето',id: 2},
                    {text: 'Осень',id: 3},
                    {text: 'Весна',id: 4}
                ]
            }
        ]
    }

    onAnswerClickHendler = (answerId) => {

        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId){

            //проверка двойного нажатия
            if(this.state.answerState){
                const key = Object.keys(this.state.answerState)[0]
                if(this.state.answerState[key] === 'success'){
                    return
                }
            }

            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {
                if(this.isQuizFinished()){
                    console.log('finished')
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
        }else{
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return (
            <div className="Quiz">
                <div>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHendler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz