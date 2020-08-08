import React, { Component, Fragment } from 'react';

import Header from '../UI/Header/Header';

import classes from './Quiz.module.css';

import {QuizData} from './QuizData';

class Quiz extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            currentIndex: 0,
            options: [],
            end: false,
            score: 0,
            disabled: true,
            userAnswer: null,
        }
    }


  loadQuestion = () => {
      const { currentIndex } = this.state;
      this.setState(() => {
          return {
              question: QuizData[currentIndex].question,
              options: QuizData[currentIndex].options,
              answer: QuizData[currentIndex].answer
          }
      }

      )
  }

  nextQuestionHandler = () => {
      const { userAnswer, answer, score} = this.state
      
      if(userAnswer === answer) {
          this.setState({
              score: score + 1
          })
      }
    
      this.setState({
          currentIndex: this.state.currentIndex + 1,
          userAnswer: null
      })
 
  }


  render() {
     

    return (
        <>
          <Header />
          <h1 className={classes.Header}>Test your Harry Potter knowledge</h1>
        </>
    )
  }
}

export default Quiz;
