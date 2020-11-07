
function Answer (props){
    return(
        <div>
            <button type='button' onClick={()=>props.click(props.choice)}>{props.answer}</button>
        </div>
    );
}

export default Answer;