import React, { Component, Fragment } from 'react';

import Header from '../shared//UI/Header/Header';
import Footer from '../shared/UI/Footer/Footer';

import './Quiz.css';
import Malfoy from '../../images/malfoyillustration.jpg';
import staircase from '../../images/movingstaircase.jpg';
import friends from '../../images/hermioneronharrycartoon.jpg';
import greathall from '../../images/greathallhalloweenillustration.jpg';
import hogsmead from '../../images/hogsmead.jpg';
import erised from '../../images/erised.jpg';


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

  restartQuizHandler = () => {
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
            <button onClick={this.restartQuizHandler}>Play Again</button>
          </ul>
        </div>
      )
    }
    return (
        <>
          <Header />
          <h1 className="Header">Test your Harry Potter knowledge</h1>
          <img src={Malfoy} alt="malfoyattackshermione" id="malfoy" />
          <img src={friends} alt="malfoyattackshermione" id="friends" />
          <img src={Malfoy} alt="malfoyattackshermione" id="malfoy" />
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
              
              onClick={this.endQuizHandler}>
                End of Quiz</button>
            } 
           
            <br />
            <br />
          
            <span>{`Question ${index + 1} of ${QuizData.length}`}</span>
            <br />
            
            <br />
            <img id="hogsmead" src={hogsmead} alt="hogsmead" />
            <img id="erised" src={erised} alt="erised" />
            <img id="greathall" src={greathall} alt="greathallhalloween" />
          </div>
          <br />
          <br />
          <br />
          <br  />
          <Footer />
        </>
    )
  }
}

export default Quiz;
