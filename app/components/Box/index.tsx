import React from 'react';
import { BoxWrapper, BoxEmploymentWrapper } from './style';

interface Props {
  title?: string;
  desc?: string;
  src?: string;
}
const Box = ({ title = '', desc = '' }: Props) => {
  return (
    <BoxWrapper>
      <h3>{title}</h3>
      <p>{desc}</p>
    </BoxWrapper>
  );
};

Box.Employment = ({ title = '', desc = '', src = '' }: Props) => {
  return (
    <BoxEmploymentWrapper>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={src} target="_blank" rel="noreferrer">
        〉
      </a>
    </BoxEmploymentWrapper>
  );
};
export default Box;
