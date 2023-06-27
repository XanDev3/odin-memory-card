import './App.css';
import { useEffect, useState } from 'react';
import Board from './components/Board.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

function App() {
  const[score,setScore] = useState(0)
  const[best,setBest] = useState(0)
  const[memory,setMemory] = useState([])

  const addToScore = (e) => {
    let newScore = score
    setMemory([...memory, e.currentTarget.id])
    setScore(newScore+=1)
  }

  useEffect(()=>{
    let prevMemory = [...memory]
    const isGameLost = prevMemory.includes(prevMemory.pop())
    if (isGameLost) {
      if (score > best) {
        setBest(score - 1);
      }
      setScore(0);
      setMemory([]);
    }
  },[memory, score, best] )

  return (
    <div className="App" id="App">
      <Header score={score} best={best}></Header>
      <p className="instructions">Get points by clicking on an image but don't click any Champion more than once!</p>
      <Board addToScore={addToScore}></Board>
      <Footer></Footer>
    </div>
  );
}

export default App;
