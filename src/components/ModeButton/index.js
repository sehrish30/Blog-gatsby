import React from 'react';

//Images
import DayIcon from 'images/daymode.svg';
import NightIcon from 'images/nightmode.svg';

//styles
import { ImgButton } from './ModelButton.styles';

const ModeButton = ({ darkMode, setDarkMode }) => (
  <ImgButton
    src={darkMode ? NightIcon : DayIcon}
    alt="mode"
    onClick={() => setDarkMode(prev => !prev)}
  />
);

export default ModeButton;
