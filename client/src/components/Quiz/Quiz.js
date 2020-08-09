import React, { Component, Fragment } from 'react';

import Header from '../UI/Header/Header';

//import classes from './Quiz.module.css';
import './Quiz.css';

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

endQuizHandler = () => {
  const { answer, userAnswer, score } = this.state;
  if( userAnswer === answer) {
    this.setState({
      score: score + 1
    })
   }
  if(this.state.index === QuizData.length -1){
    this.setState({
      disabled: true,
      end: true
    })

  }
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

  startQuizHandler = () => {
    this.setState({
      index: 0,
            options: [],
            end: false,
            score: 0,
            disabled: true,
            userAnswer: null,
    }) 
  }

  render() {
    const { question, options, index, userAnswer, end } = this.state;
    
    if(end) {
      return (
        <div>
          <h1>You scored: {this.state.score + 1} out of a possible 26 questions</h1>
          <h3>The correct answers were:</h3>
          <ul>
            {QuizData.map((item, index) => (
              <li className="options"
              key={index}>
              {item.answer}
              </li>
              
                 
            ))}
            <button onClick={this.startQuizHandler}>Play Again</button>
          </ul>
        </div>
      )
    }
    return (
        <>
          <Header />
          <h1 className="Header">Test your Harry Potter knowledge</h1>
          <div>
            <h2>{question}</h2>
            { 
             options.map((option) => 
           <p key={option.id} className={`options ${userAnswer === option? "selected" : null}`}
           onClick = {() => this.checkAnswer(option)}>
           {option}
         
         </p>
             )
        }
        
        { index < QuizData.length - 1 && 
        <button 
          disabled = {this.state.disabled } 
          onClick={this.nextQuestionHandler}>
            Next Question</button>}
            
            {index === QuizData.length -1 && 
            <button 
              disabled= {this.state.disabled = false} 
              onClick={this.endQuizHandler}>
                End of Quiz</button>
            } 
           
            <br />
            <br />
          
            <span>{`Question ${index + 1} of ${QuizData.length}`}</span>
            <br />
            
            <br />
            
           
          </div>
        </>
    )
  }
}

export default Quiz;
