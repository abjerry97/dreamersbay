import React, { useState } from 'react'
import "./FaqDropdown.css"
function FaqDropdown(props) {
  
  const [dropdownState, setdropdownState] = useState(false);
  return (
    <div className={`faq-card p-4 mb-4 ${dropdownState? `shadow-white` :``}  `} onClick={()=>setdropdownState(!dropdownState)} >
    <div className="d-flex gap-3">
      <h5 className=" ">{props.id}.</h5>{" "}
      <div className="">
        <h6 className=" faq-question " >{props.question}</h6>
        <p className={`faq-answer mt-3 ${dropdownState ? `d-block`: `d-none`}`}>
      {props.answer}
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default FaqDropdown