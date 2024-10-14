import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // Optional: For prop validation
import { Navbar } from "../components";
import "./testing.css";

// Utility function to parse content and create React elements
const parseContent = (content) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');

  const traverse = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent; // Return text nodes as strings
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      switch (node.tagName) {
        case 'OL':
          return (
            <ol className="list">
              {Array.from(node.children).map((child) => (
                <li key={child.textContent}>{traverse(child)}</li>
              ))}
            </ol>
          );
        case 'UL':
          return (
            <ul className="list">
              {Array.from(node.children).map((child) => (
                <li key={child.textContent}>{traverse(child)}</li>
              ))}
            </ul>
          );
        case 'STRONG':
          return <strong key={node.textContent}>{traverse(node.firstChild)}</strong>;
        case 'EM':
          return <em key={node.textContent}>{traverse(node.firstChild)}</em>;
        default:
          return Array.from(node.childNodes).map((child) => traverse(child));
      }
    }
    return null;
  };

  return traverse(doc.body);
};

const Section = React.forwardRef(({ title, content, isRight, imageSrc }, ref) => {
  return (
    <section
      ref={ref}
      className={`section ${isRight ? 'section-right' : 'section-left'}`}
      role="region"
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
    >
      <h2 id={title.replace(/\s+/g, '-').toLowerCase()}>{title}</h2>
      <img src={imageSrc} alt={title} className="section-image" />
      <div className="content">{parseContent(content)}</div>
    </section>
  );
});

const Testing = () => {
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
            if (scrollDirection === "down") {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.add("visible");
            }
          } else {
            if (scrollDirection === "down" && entry.boundingClientRect.top < 0) {
              entry.target.classList.remove("visible");
            } else if (scrollDirection === "up" && entry.boundingClientRect.top > window.innerHeight) {
              entry.target.classList.remove("visible");
            }
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
      content: `
        Welcome to Shot se Samwad, the premier online destination for aspiring filmmakers, cinema enthusiasts, and industry professionals seeking to master the intricacies of Indian filmmaking.
      `,
      imageSrc: "/assets/images/hardware.jpg", // Path to your image
      isRight: true,
    },
    {
      title: "Our Mission",
      content: `
        At Shot se Samwad, we are committed to demystifying the art and science of cinema. Our mission is to provide comprehensive, accessible, and professional-grade education on all aspects of filmmaking, with a special focus on the unique storytelling techniques employed in Indian cinema.
      `,
      imageSrc: "/assets/images/p2.jpg", // Path to your image
      isRight: true,
    },
    {
      title: "What Sets Us Apart",
      content: `
        <ol>
          <li>Expertise in Indian Cinema: We specialize in analyzing and teaching filmmaking techniques through the lens of Indian films, offering insights into both mainstream and alternative cinema.</li>
          <li>Comprehensive Curriculum: Our content spans the entire spectrum of filmmaking, from pre-production planning to post-production finesse.</li>
          <li>Industry-Relevant Skills: All our tutorials and analyses are designed to impart practical, industry-relevant skills that can be immediately applied to real-world projects.</li>
          <li>Continuous Learning: We regularly update our content to reflect the latest trends and technologies in the fast-evolving world of cinema.</li>
        </ol>
      `,
      imageSrc: "/assets/images/p3.jpg", // Path to your image
      isRight: false,
    },
    {
      title: "Our Offerings",
      content: `
        <ol>
          <li>Cinematography Masterclass
            <ul>
              <li>Shot Composition: Explore the nuances of framing, from basic shots to complex camera movements.</li>
              <li>Lighting Techniques: Learn how to create mood and atmosphere through expert lighting.</li>
              <li>Camera Handling: Master the technical aspects of various camera systems used in professional filmmaking.</li>
            </ul>
          </li>
          <li>Editing Workshops
            <ul>
              <li>Narrative Structuring: Understand how editing shapes storytelling in Indian cinema.</li>
              <li>Rhythm and Pacing: Learn to control the emotional impact of your film through precise editing techniques.</li>
              <li>Software Tutorials: Get hands-on experience with industry-standard editing software.</li>
            </ul>
          </li>
          <li>Color Grading Intensives
            <ul>
              <li>Color Theory for Film: Discover how color influences perception and emotion in cinema.</li>
              <li>Grading Workflows: Learn professional color grading processes used in Indian film production.</li>
              <li>Look Creation: Develop skills to craft unique visual styles for different genres and narratives.</li>
            </ul>
          </li>
          <li>Film Analysis Series
            <ul>
              <li>Shot-by-Shot Breakdowns: Detailed analysis of iconic scenes from Indian cinema.</li>
              <li>Director's Techniques: Explore the signature styles of renowned Indian filmmakers.</li>
              <li>Cultural Context: Understand how Indian cinema reflects and influences society.</li>
            </ul>
          </li>
        </ol>
      `,
      imageSrc: "/assets/images/p4.jpg", // Path to your image
      isRight: true,
    },
    {
      title: "Learning Methodology",
      content: `
        Our approach combines theoretical knowledge with practical application:
        <ol>
          <li>Video Tutorials: In-depth, easy-to-follow video lessons on various aspects of filmmaking.</li>
          <li>Case Studies: Analysis of real Indian films to illustrate concepts and techniques.</li>
          <li>Practical Exercises: Hands-on assignments to reinforce learning and build your portfolio.</li>
          <li>Expert Interviews: Insights from industry professionals working in Indian cinema.</li>
          <li>Community Forums: Engage with peers and mentors to discuss ideas and get feedback.</li>
        </ol>
      `,
      imageSrc: "/assets/images/p5.jpg", // Path to your image
      isRight: false,
    },
    {
      title: "Join Our Community of Filmmakers",
      content: `
        Subscribe to Shot se Samwad on YouTube to access our vast library of content and become part of a vibrant community of filmmakers and cinema enthusiasts.
        <br />
        [YouTube Channel: www.youtube.com/shotsesamwad]
      `,
      imageSrc: "/assets/images/p6.jpg", // Path to your image
      isRight: false,
    },
    {
      title: "Stay Connected",
      content: `
        Follow us on social media for daily tips, industry news, and exclusive content:
        <ul>
          <li>Instagram: @shotsesamwad</li>
          <li>Twitter: @shotsesamwad</li>
          <li>Facebook: /shotsesamwadofficial</li>
        </ul>
      `,
      imageSrc: "/assets/images/p7.jpg", // Path to your image
      isRight: false,
    },
    {
      title: "Contact Us",
      content: `
        For collaborations, sponsorships, or any inquiries:
        <br />
        Email: info@shotsesamwad.com
      `,
      imageSrc: "/assets/images/p8.jpg", // Path to your image
      isRight: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="testing">
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
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isRight: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Testing;
