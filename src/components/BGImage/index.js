import React from 'react';

import { Wrapper, FakeBGImage, Content } from './BGImage.styles';

//styles
const BGImage = ({ fluid, title, className, children }) => (
  <Wrapper>
    <FakeBGImage fluid={fluid} title={title} />
    <Content className={className}>{children}</Content>
  </Wrapper>
);

export default BGImage;
