import RotatingCircle from './Components/RotatingCircle';
import React, { useState } from 'react';
import UseCallbackDemo from './hooks/UseCallbackDemo';
import UseContextDemo from './hooks/UseContextDemo';
import UseEffectDemo from './hooks/UseEffectDemo';
import UseMemoDemo from './hooks/UseMemoDemo';
import UseReducerDemo from './hooks/UseReducerDemo';
import UseRefDemo from './hooks/UseRefDemo';
import CurrencyConverter from './Components/CurrencyConverter';
import QuizApp from './Components/QuizApp';
import Timer from './Components/Timer';
import MyForm from './Components/From';
import ClickCount from './Components/ClickCount';
import ToggleSwitch from './Components/ToggleSwitch';
import DataFetcher from './Components/DataFetcher';
import Modal from './Components/Modal';
import Slider from './Components/Slider';
import './App.css';

function AnimatedText() {
  const animationStyle = {
    animation: 'textFadeIn 2s ease-in-out forwards',
  };

  return (
    <h1 style={animationStyle}>This text fades in!</h1>
  );
}

function App() {
  const [animationClass, setAnimationClass] = useState('');

  const startAnimation = () => {
    setAnimationClass('animate');
    setTimeout(() => {
      setAnimationClass('');
    }, 1000);
  };

  return (
    <div className="App">
      <Slider />
      <hr />
      <DataFetcher />
      <Modal />
      <ToggleSwitch />
      <hr />
      <ClickCount />
      <hr />
      <Timer />
      <CurrencyConverter />
      <hr />
      <UseEffectDemo />
      <UseContextDemo />
      <UseRefDemo />
      <UseReducerDemo />
      <UseCallbackDemo />
      <UseMemoDemo />
      <hr />
      <QuizApp />
      <hr />
      <MyForm />
      <hr />

      <h1>Simple Animation Page</h1>
      <button onClick={startAnimation}>Start Animation</button>
      <div className={`box ${animationClass}`}></div>
      <AnimatedText />
      <div className="animated-box" />
      <br /><pre><div className="animated-box" />
        <div className="animated-box" /></pre>
      <div className="animated-box" />
      <br />
      <div className="animated-box" />
      <RotatingCircle />
    </div>
  );
}

export default App;