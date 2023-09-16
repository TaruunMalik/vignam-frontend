import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function Number({ n, isVisible }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function NumberComp({ num }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".number-comp");

      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        const isElementInView =
          elementTop >= 0 &&
          elementBottom <=
            (window.innerHeight || document.documentElement.clientHeight);

        if (isElementInView) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="number-comp">
      <h1>
        <Number n={num} isVisible={isVisible} />
      </h1>
    </div>
  );
}
