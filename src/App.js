import './App.css';
import Board from './components/Board.js';
import Header from './components/Header.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function App() {
  return (
    <div className="App" id="App">
      <Header></Header>
      <Board></Board>
      <footer class="footer">
        <p>Xander© 2022</p>
        <a href="https://github.com/xandernesta/odin-memory-card">
          <FontAwesomeIcon icon={icon({ name: 'GitHub',style: 'brands'})} />
        </a>
      </footer>
    </div>
  );
}

export default App;
