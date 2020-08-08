import React, { Component, Fragment } from 'react';

import Header from '../UI/Header/Header';

import classes from './Quiz.module.css';

import { QuizData } from './QuizData';

class Quiz extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            index: 0,
            options: [],
            end: false,
            score: 0,
            disabled: true,
            userAnswer: null,
        }
    }


  loadQuestion = () => {
      const { index } = this.state;
      this.setState(() => {
          return {
            options: QuizData[index].options,
            answer: QuizData[index].answer,
            question: QuizData[index].question  
          }
      })
  };

  componentDidMount() {
    this.loadQuestion()
  }

  componentDidUpdate(prevProps, prevState) {
   
    const { index } = this.state;
 
    if(this.state.index !== prevState.index) {
        this.setState(() => {
            return {
                question: QuizData[index].question,
                options: QuizData[index].options,
                answer: QuizData[index].answer
            }
        })
    }
}

checkAnswer = (answer) => {
    this.setState({
      userAnswer: answer,
      disabled: false
    })
}

  nextQuestionHandler = () => {
      const { userAnswer, answer, score} = this.state
      
      if(userAnswer === answer) {
          this.setState({
              score: score + 1
          })
      }
    
      this.setState({
          index: this.state.index + 1,
          userAnswer: null
      })
 
  }


  render() {
    const { question, options, index, userAnswer, end } = this.state;
    
    const optionstwo  = options.map((option)  => 
      <li>{option}</li>
    )
    return (
        <>
          <Header />
          <h1 className={classes.Header}>Test your Harry Potter knowledge</h1>
          <div>
            <h2>{question}</h2>
            <h2>{optionstwo}</h2>
            <span>{`Question ${index + 1} of ${QuizData.length}`}</span>
            <br />
            <br />
            <button onClick={this.nextQuestionHandler}>Next Question</button>
          </div>
        </>
    )
  }
}

export default Quiz;
