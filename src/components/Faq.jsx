import React from "react";
import FaqDropdown from "./FaqDropdown/FaqDropdown";


const questions = [
  {
    id:1,
    question:"How many Dreamers are there?",
    answer:"There are a total of 10,000 unique Dreamers in our first collection."
  },
  {
    id:2,
    question:"How can I be part of the community?",
    answer:"You can subscribe to our mailing list or join our Discord page."
  },
  {
    id:3,
    question:"Why own a Dreamer NFT??",
    answer:" Owning a Dreamer NFT gives you access to various dream maps that  we have for every Dreamer such as the DreamerCanvas, DreamWealth and DreamTalk    e.t.c."
  },
  {
    id:4,
    question:"How do I buy a Dreamer?",
    answer:""
  },
  {
    id:5,
    question:"How much does it cost to mint each Dreamer?",
    answer:"To be Announced."
  },
]
function Faq() {
  return (
    <div className=" position-relative container teams mb-5" id="faq">
      <h3 className="col-6 text-center bay-head-text   faqs-header underlinehead"> FAQs </h3>

      <div className="faq-card-wrapper d-flex flex-column">
{questions.map((question,index)=>{
  return (     <FaqDropdown {...question} key={index}/>)
})}

  
       
      </div>
    </div>
  );
}

export default Faq;
