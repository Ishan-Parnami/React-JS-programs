import React, { useState, useEffect, useCallback } from 'react';
import './QuizAppApi.css'
const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'In which year did the Titanic sink?',
      options: ['1905', '1912', '1920', '1931'],
      correctAnswer: '1912',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
  ];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);

  const handleNextQuestion = useCallback(() => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption('');
    setTimer(10);
  }, [selectedOption, currentQuestionIndex]);

  useEffect(() => {
    let timerInterval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          
          if(currentQuestionIndex<questions.length-1){
              handleNextQuestion();
              return 10; 
          }
        }
      });
    }, 1000);
  
    
    return () => clearInterval(timerInterval);
  }, [handleNextQuestion, timer,currentQuestionIndex]);
  

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderOptions = () => {
    return questions[currentQuestionIndex].options.map((option, index) => (
      <button
        key={index}
        onClick={() => handleOptionSelect(option)}
        disabled={selectedOption !== ''}
      >
        {option}
      </button>
    ));
  };

  return (
    <div>
      <h1>Quiz App</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          {renderOptions()}
          <h4>Time Remaining: {timer} seconds</h4>
          <button onClick={handleNextQuestion} disabled={selectedOption === ''}>
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <h4>Your Score: {score}</h4>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
