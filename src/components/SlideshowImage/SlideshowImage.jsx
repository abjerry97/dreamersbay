import React from "react";
import { roadmap } from "../../static/roadmap";
import "./SlideshowImage.css";
// const slideImages = ["/images/slide1.png", "/images/slide2.png", "/images/slide3.png"];
const delay = 1;

function SlideshowImage(props) { 
    const {index, setIndex} = props;
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
let prevIndex =0
 
  React.useEffect(() => {
    resetTimeout(); 
    timeoutRef.current = setTimeout(
      () =>
        // setIndex((prevIndex) =>
          prevIndex === roadmap.length - 1 ? 0 : prevIndex + 1
        // )
        ,
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow roadmap-hero sticky-lg-top">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {roadmap.map((slideImage, index) => (
           <img key={slideImage.id} src={slideImage.image} alt="slide" width="100%" height="500px" className="roadmapImg" />
        ))}

       
      </div>

      {/* <div className="slideshowDots">
        {roadmap.map((slideImage, idx) => (
          <div
            key={slideImage.id}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(0);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
}

export default SlideshowImage;
