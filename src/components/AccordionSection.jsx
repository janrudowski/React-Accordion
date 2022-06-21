import chevron from './../icons/chevron.svg';

import { useState, useRef } from 'react';
function AccordionSection(props) {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState('0px');
  const content = useRef(null);
  function toggle() {
    setIsActive((prevState) => !prevState);
    setHeight(isActive ? '0px' : `${content.current.scrollHeight}px`);
  }
  return (
    <div className='accordion-section'>
      <div className='accordion-btn' onClick={toggle}>
        <p>
          <img className='icon' src={props.icon} alt='settings' />
          {props.title}
        </p>
        <img
          className={`chevron icon ${isActive ? 'chevron--active' : ''}`}
          src={chevron}
          alt='chevron'
        />
      </div>
      <div
        ref={content}
        style={{ height: `${height}` }}
        className={`accordion-content ${isActive ? 'accordion--active' : ''}`}
      >
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
    </div>
  );
}

export default AccordionSection;
