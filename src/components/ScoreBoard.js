function ScoreBoard(props){
    return(
        <div id="score-box">
                <div className="score">
                    <p>Champions Score:&nbsp;</p>
                    <p className="score-num">{props.score}</p>
                </div>
                <div className="score">
                    <p>Best Score:&nbsp;</p>
                    <p className="score-num">{props.best}</p>
                </div>
        </div>
    )
}
export default ScoreBoard