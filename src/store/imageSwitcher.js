import React from "react";
import { useState } from "react";
import Fade from 'react-bootstrap/Fade'
export default function ImageSwitcher(props) {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {

    setIsHovered(!isHovered);
  };

  return (
    <div >
      <img class="card-img-top " style={{ height: "23em", width: "23em" }}
        src={isHovered ? props.img2 : props.img1}
        alt="Image"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />

      {/* <Fade in={isHovered}>
        <img class="card-img-top " style={{ height: "25em", width: "25em" }}
          onMouseLeave={() => setIsHovered(!isHovered)}
          onMouseEnter={() => setIsHovered(!isHovered)}
          src={isHovered ? props.img2 : props.img1} />
      </Fade> */}
      
      
    </div>



  );

}
