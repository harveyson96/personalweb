import { useState } from "react";
import { Carousel } from "react-bootstrap";
export default  function MyCarousel(){
  const [index, setIndex] = useState(0)
    return <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Harvey Sun</h3>
          <p>a software engineer based in Las Vegas with expertise in front-end development</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
}