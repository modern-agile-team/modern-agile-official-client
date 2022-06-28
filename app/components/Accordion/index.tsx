import React, { useCallback, useState } from 'react';
import {
  AccordionWrapper,
  AccordionButtonContainer,
  AccordionPanelContainer,
} from './style';

interface Props {
  title: string;
  content: string;
}
const Accordion = ({ title, content }: Props) => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpenPanel((prev) => !prev);
  }, []);
  return (
    <AccordionWrapper>
      <AccordionButtonContainer onClick={handleToggle}>
        <p>{title}</p>
        <span>{isOpenPanel ? '▲' : '▼'}</span>
      </AccordionButtonContainer>
      <AccordionPanelContainer className={isOpenPanel ? 'active' : ''}>
        <p>{content}</p>
      </AccordionPanelContainer>
    </AccordionWrapper>
  );
};

export default Accordion;
