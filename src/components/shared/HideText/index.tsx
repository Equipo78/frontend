import React from 'react';

interface HideTextInterface {
  isShowing: boolean;
  name: string;
  id: string;
  handleChange: () => void;
}

const HideText = ({ isShowing, name, id, handleChange }: HideTextInterface): JSX.Element => {
  return (
    <input id={id} name={name} type={isShowing ? 'password' : 'text'} onChange={handleChange} />
  );
};

export default HideText;
