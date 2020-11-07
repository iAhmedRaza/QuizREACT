import Question from './question'
import AnswerList from './answerList'
import UserGreeting from './userGreetings'
function QuizArea (props){
    if(props.isFinished){
        return <UserGreeting />;
    }

    return(
        <div>
           <h2>Quiz Area</h2>
           <Question dataset = {props.dataset} />
           <AnswerList  dataset = {props.dataset} click = {props.handleClick}/>
           
        </div>
    );
}

export default QuizArea;