import { Navbar} from "../components";
import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion"; // Ensure you import motion here
import "../styles/homepage.css";

// Importing images from src/assets/images
import indianCinemaImg from "../assets/images/indian_cinema.jpg";
import photographyImg from "../assets/images/photography.jpg";
import videographyImg from "../assets/images/videography.jpg";
import softwareImg from "../assets/images/software.jpg";
import hardwareImg from "../assets/images/hardware.jpg";

// Section Component
const Section = React.forwardRef(({ title, content, isRight, imageSrc }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={`section ${isRight ? 'section-right' : 'section-left'}`}
      role="region"
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
      initial={{ opacity: 0 }} // Initial opacity for animation
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="section-image-container">
        <img src={imageSrc} alt={title} className="section-image" />
        <div className="overlay">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </motion.section>
  );
});

// Homepage Component
function Homepage() {
  const sectionRefs = useRef([]);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = Math.max(scrollY, 0);
    };

    window.addEventListener("scroll", updateScrollDirection);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
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
      title: "Shot se Samwad: Decoding the Art of Indian Cinema",
      content: `Welcome to Shot se Samwad, the premier online destination for aspiring filmmakers, cinema enthusiasts, and industry professionals seeking to master the intricacies of Indian filmmaking.`,
      isRight: true,
      imageSrc: indianCinemaImg,
    },
    {
      title: "Our Mission",
      content: `At Shot se Samwad, we are committed to demystifying the art and science of cinema.`,
      isRight: true,
      imageSrc: photographyImg,
    },
    {
      title: "What Sets Us Apart",
      content: `We specialize in analyzing and teaching filmmaking techniques through the lens of Indian films, offering insights into both mainstream and alternative cinema.`,
      isRight: false,
      imageSrc: videographyImg,
    },
    {
      title: "Our Offerings",
      content: `Explore our range of masterclasses, workshops, and analysis series designed for filmmakers at all levels.`,
      isRight: true,
      imageSrc: softwareImg,
    },
    {
      title: "Join Our Community of Filmmakers",
      content: `Subscribe to Shot se Samwad on YouTube to access our vast library of content and become part of a vibrant community of filmmakers and cinema enthusiasts.`,
      isRight: false,
      imageSrc: hardwareImg,
    },
    {
      title: "Stay Connected",
      content: `Follow us on social media for daily tips, industry news, and exclusive content.`,
      isRight: false,
      imageSrc: softwareImg,
    },
    {
      title: "Contact Us",
      content: `For collaborations, sponsorships, or any inquiries: Email: info@shotsesamwad.com`,
      isRight: false,
      imageSrc: videographyImg,
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
            imageSrc={section.imageSrc}
            ref={(el) => (sectionRefs.current[index] = el)}
          />
        ))}
      </div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Homepage;
