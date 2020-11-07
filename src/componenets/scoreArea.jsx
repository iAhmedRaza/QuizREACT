import Correct from './correct'
import Incorrect from './incorrect'

function ScoreArea (props){
    return(
        <div>
           <h2>Score Area</h2>
           <Correct correct={props.correct}/>
            <Incorrect incorrect={props.incorrect}/>
        </div>
    );
}

export default ScoreArea;