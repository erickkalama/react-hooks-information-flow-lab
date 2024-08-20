import React from 'react';

const Header = ({ onDarkModeClick }) => {
  return (
    <button onClick={onDarkModeClick}>Toggle Mode</button>
  );
};

export default Header;