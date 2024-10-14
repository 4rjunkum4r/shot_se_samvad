import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // Optional: For prop validation
import { Navbar } from "../components";
import "./testing.css";

const Section = React.forwardRef(({ title, content, isRight }, ref) => {
  return (
    <section
      ref={ref}
      className={`section ${isRight ? 'section-right' : 'section-left'}`}
      role="region"
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
    >
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h2>
      <p>{content}</p>
    </section>
  );
});

const Testing = () => {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = Math.max(scrollY, 0);
    };

    window.addEventListener("scroll", updateScrollDirection);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If scrolling down and section is intersecting, add visible class
            if (scrollDirection === "down") {
              entry.target.classList.add("visible");
            } else {
              // If scrolling up and section is intersecting, add visible class
              entry.target.classList.add("visible");
            }
          } else {
            // If scrolling down and section is out of view, remove visible class
            if (scrollDirection === "down" && entry.boundingClientRect.top < 0) {
              entry.target.classList.remove("visible");
            } else if (scrollDirection === "up" && entry.boundingClientRect.top > window.innerHeight) {
              entry.target.classList.remove("visible");
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [scrollDirection]);

  const sections = [
    {
      title: "What we do?",
      content: `# Shot se Samwad: Decoding the Art of Indian Cinema ...`, // Content truncated for brevity
      isRight: false,
    },
    {
      title: "Fate",
      content: `The boy walked down the street in a carefree way...`, // Content truncated for brevity
      isRight: true,
    },
    {
      title: "Greg thinks",
      content: `Greg understood that this situation would make...`, // Content truncated for brevity
      isRight: false,
    },
    {
      title: "Random",
      content: `Where do they get a random paragraph?...`, // Content truncated for brevity
      isRight: true,
    },
    {
      title: "Marriage",
      content: `There are only three ways to make this work...`, // Content truncated for brevity
      isRight: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="home-container">
        {sections.map((section, index) => (
          <Section
            key={section.title}
            title={section.title}
            content={section.content}
            isRight={section.isRight}
            ref={(el) => (sectionRefs.current[index] = el)}
          />
        ))}
      </div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired,
};

export default Testing;
