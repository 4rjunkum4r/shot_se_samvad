import React from "react";
import { motion } from "framer-motion";
import './section.css'; // Import Section styles

const Section = React.forwardRef(({ title, content, isRight, imageSrc }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={`section ${isRight ? 'section-right' : 'section-left'}`}
      role="region"
      aria-labelledby={title.replace(/\s+/g, '-').toLowerCase()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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

export default Section;
