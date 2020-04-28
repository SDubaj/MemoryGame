import React from 'react'

function Card (props){
    return(
        <div className="card-container" onClick={props.onClick}>
            <div className={"card " + (props.isFlipped ? "flipped" : " ") } > 
                <div className="side-front">?</div>
                <div className="side-back">{props.image ? <img src={props.image} alt="img" width="100px" height="100px" /> : props.value}</div>
            </div>
                {/* {cards.map(item =>
                    <div className={"card " + (props.isFlipped ? "back" : "front ") } key={cards.id} onClick={props.onClick}></div>
                    )}
                    
                <br/>
            
                {cards.map(item =>
                    <div className="card"></div>
                    )} */}
            
        </div>
    )
}
export default Card;