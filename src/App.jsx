import { useRef } from "react";
import cat from "./assets/picmix.com_2495597.gif";
import clouds from "./assets/clouds.jpg";
import moon from "./assets/moon.jpg";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax id="parallax" pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${clouds})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer id="img" sticky={{ start: 0.9, end: 2.5 }}>
          <img src={cat} alt="cat" width={600}/>
        </ParallaxLayer>

        <ParallaxLayer speed={0.05} offset={0.2} onClick={()=> ref.current.scrollTo(3)}>
          <h2> Hi beautiful</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={2} onClick={()=> ref.current.scrollTo(0)}>
          <h2> Hello Earth !</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
