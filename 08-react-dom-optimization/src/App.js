import React, { useState, useCallback } from 'react';
import Button from "./components/UI/Button/Button";
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* <DemoOutput show={showParagraph} /> */}
      {/* Even after Hardcoding props below, the console.log in DemoOutput will run because is Parent component is reloded then child component will also be reloaded */}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggeling</Button>
      <Button onClick={toggleParagraphHandler}>Toogle Paragraph!</Button>
    </div>
  );
}
export default App;
