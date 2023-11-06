import Bay from "./components/Bay";
import Dreams from "./components/Dreams";
import EmailBox from "./components/EmailBox";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Introduction from "./components/Introduction";
import Manifesto from "./components/Manifesto";
import Navbar from "./components/NavBar";
import Roadmap from "./components/Roadmap";
import Teams from "./components/Teams";

import React, { Component } from 'react';














export class App extends Component {
  
constructor(...props) { 
  super()
}

componentDidMount() {

  setTimeout(() => {
    (
      document.getElementById("preload") || { style: { display: "" } }
    ).style.display = "none";
    (
      document.getElementById("root") || { style: { display: "" } }
    ).style.display = "block";
  }, 5000);
  
}

  render() {
    return (
      <div className="  ">
      <Navbar/>
<div className="App  ">


{/* <div className="bg1">
  
</div> */}
<Introduction/>
<div className="ec-bg">
<Manifesto/>
<Bay/>
</div>

<Roadmap/>
{/* <Dreams/> */}
<Teams/>
<Faq/>
<EmailBox/>
<Footer/>

</div>
</div>
    );
  }
}

export default App;
 
 
