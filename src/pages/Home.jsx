// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import Section from "../components/Section"; // Import Section component
import "./home.css"; // Import Home styles

import indianCinemaImg from "../assets/images/indian_cinema.jpg";
import photographyImg from "../assets/images/photography.jpg";
import videographyImg from "../assets/images/videography.jpg";
import softwareImg from "../assets/images/software.jpg";
import hardwareImg from "../assets/images/hardware.jpg";

function Home() {
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
      content:
        "Welcome to Shot se Samwad, the premier online destination for aspiring filmmakers, cinema enthusiasts, and industry professionals seeking to master the intricacies of Indian filmmaking.",
      isRight: false,
      imageSrc: indianCinemaImg,
    },
    {
      title: "Our Mission",
      content:
        "To educate, inspire, and empower the next generation of filmmakers through comprehensive resources and hands-on experience.",
      isRight: true,
      imageSrc: photographyImg,
    },
    {
      title: "Explore the World of Videography",
      content:
        "Dive into the art of videography with our extensive tutorials, expert tips, and insights from industry veterans.",
      isRight: false,
      imageSrc: videographyImg,
    },
    {
      title: "Harnessing the Power of Software",
      content:
        "Learn how to utilize cutting-edge software tools to enhance your filmmaking process.",
      isRight: true,
      imageSrc: softwareImg,
    },
    {
      title: "Understanding Hardware Essentials",
      content:
        "A guide to the essential hardware for filmmakers, ensuring you have the right equipment for your projects.",
      isRight: false,
      imageSrc: hardwareImg,
    },
  ];

  return (
    <>
      <div className="home">
        {sections.map((section, index) => (
          <Section
            key={index}
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

export default Home;
