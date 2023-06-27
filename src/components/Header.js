import underline from '/home/alex/odin-repos/odin-memory-card/src/assets/Metal_Under_White.png'
import ScoreBoard from './ScoreBoard.js'
function Header(props){
    return(
        <div id="Header">
            <div className="title">
                <h1>Memory Card Game</h1>
                <img src={underline} alt="under-ornament" />
            </div>
            <ScoreBoard score={props.score} best={props.best}></ScoreBoard>
            
        </div>
    )
}
export default Header