import "../Style/Testimonial.css"
import React, { useState, useEffect } from 'react';

function Testimonial() {
  const headingTexts = ['Top fabrication firm', 'Great service', 'Drawings'];
  const paragraphTexts = [
    'Buffalo have turned around several jobs for us now in a timely manner and to a great standard.',
    'I can always rely on the Buffalo team. They never fail to provide efficient and good value service.',
    'I needed some fabrication drawings produced quickly and Buffalo delivered in record time.',
  ];
  const authorTexts = ['Sean M - 28/10/2022', 'Dave Wilson - 10/10/2022', 'North Hill Construction - 15/06/2022'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Function to cycle through the text with fading effect
    const cycleText = () => {
      setIndex((prevIndex) => (prevIndex + 1) % headingTexts.length);
    };

    // Set an interval to call the cycleText function every 3 seconds (adjust the time as needed)
    const interval = setInterval(cycleText, 5000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [headingTexts.length]);

  return (
    <div id="testimonialSection">

      <div id="testimonialText">
        <div className="testimonialsTopBottom"><h1></h1></div>

        <div className="quoteIcon">
          <div className="testimonialsStartQuote"></div>
          <div className="spacer"></div>
        </div>

        <div className="testimonialQuote">
          <h3>{headingTexts[index]}</h3>
          <p>{paragraphTexts[index]}</p>
          <div className="author">{authorTexts[index]}</div>
        </div>

        <div className="quoteIcon">
          <div className="spacer"></div>
          <div className="testimonialsEndQuote"></div>
        </div>

        <div className="testimonialsTopBottom"></div>
      </div>
      <div id="testimonialLogo"></div>

    </div>
  );
}

export default Testimonial;