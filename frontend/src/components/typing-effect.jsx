/* eslint-disable object-curly-newline */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * TypingEffect Component: Simulates a typing effect with options for
 * direction, repetition, and speed.
 * @param {Object} props - The properties passed to the component.
 * @param {string | Array<string>} props.text - The text content or an
 * array of text content to display.
 * @param {string} props.direction - The direction of the typing effect
 * ('forward', 'backward', or 'both').
 * @param {number} props.repeat - The number of times to repeat the typing effect.
 * @param {number} props.speed - The speed of the typing effect (in milliseconds).
 * @param {string} props.classes - Additional CSS classes for styling the component.
 * @returns {JSX.Element} - JSX for rendering the TypingEffect component.
 */
function TypingEffect({ text, direction, repeat, speed, classes }) {
  const textArr = Array.isArray(text) ? text : [text];
  // console.log(textArr);
  const [message, setMessage] = useState('');
  const [textCount, setTextCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(repeat);

  let interval;
  let index = 0;

  const backspace = (str) => {
    interval = setInterval(() => {
      if (index < 0) {
        clearInterval(interval);
        setTextCount((prevCount) => prevCount + 1);
      } else {
        setMessage(str.slice(0, index));
        index--;
      }
    }, speed);
  };

  const type = (str) => {
    interval = setInterval(() => {
      if (index > str.length) {
        clearInterval(interval);
        if (direction === 'both') backspace(str);
      } else {
        setMessage(str.slice(0, index));
        index++;
      }
    }, speed);
  };

  const typingInit = () => {
    if (textCount >= textArr.length) {
      if (repeatCount > 0) setRepeatCount((prev) => prev - 1);
      setTextCount(0);
    } else if (direction === 'forward' || direction === 'both') {
      type(textArr[textCount]);
    } else if (direction === 'backward') {
      backspace(textArr[textCount]);
    }
  };

  useEffect(() => {
    typingInit();
    return () => clearInterval(interval);
  }, [textCount]);

  return <p className={classes}>{message}</p>;
}
TypingEffect.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  direction: PropTypes.oneOf(['forward', 'backward', 'both']).isRequired,
  repeat: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  classes: PropTypes.string.isRequired,
};
export default TypingEffect;
