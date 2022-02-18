import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./FadeInSection.css";

const FadeInSection = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const options = {
    threshold: props.target === ".sponsors__partner" ? 0.1 : 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    }, options);
    observer.observe(domRef.current);
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();
    let setter = 0.5;
    let targets = document.querySelectorAll(props.target);
    if (props.target === ".sponsors__partner") {
      setter = 0.3;
    }

    if (isVisible) {
      tl.to(targets, { opacity: 1, stagger: setter, delay: 0.2 });
    } else {
      tl.to(targets, { opacity: 0, duration: 0.1, stagger: 0.1 });
    }
  }, [isVisible]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "isVisible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
