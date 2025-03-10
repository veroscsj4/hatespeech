/* eslint-disable jsx-a11y/anchor-is-valid */
/* because of UIkit template */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * AccordionComponent gi: Represents an accordion component
 * to display a list of items with titles and content.
 * @param {Object} props - The component properties.
 * @param {Array} props.items - An array of accordion items.
 * @returns {JSX.Element} - JSX for rendering the AccordionComponent.
 */
function AccordionComponent({ items }) {
  return (
    <ul uk-accordion='multiple: true'>
      {items.map((item) => (
        <li key={item.title}>
          <a className='uk-accordion-title' href='#'>
            {item.title}
          </a>
          <div className='uk-accordion-content'>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

AccordionComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
    }),
  ).isRequired,
};

export default AccordionComponent;
