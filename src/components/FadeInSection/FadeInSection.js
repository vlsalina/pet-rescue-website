import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./FadeInSection.css";

const FadeInSection = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const options = {
    threshold: 1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    }, options);
    observer.observe(domRef.current);
  }, []);

  useEffect(() => {
    let tl = gsap.timeline();
    let targets = document.querySelectorAll(props.target);
    if (isVisible) {
      tl.to(targets, { opacity: 1, stagger: 0.5, delay: 0.2 });
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
