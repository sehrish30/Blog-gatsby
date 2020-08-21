import React from 'react';
import { Link } from 'gatsby';

import { useHeroQuery } from 'hooks/useHeroQuery';

//component
import BGImage from 'components/BGImage';

//styles
import { HeroWrapper, TextWrapper } from './Hero.styles';

const Hero = () => {
  const {
    heroImage,
    heroImageText,
    heroImageBtnText,
    heroImageBtnLink,
  } = useHeroQuery();

  return (
    <HeroWrapper>
      <BGImage title="heroImage" fluid={heroImage.childImageSharp.fluid}>
        <TextWrapper>
          <h2>{heroImageText}</h2>
          <Link to={heroImageBtnLink}>
            <button>{heroImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  );
};

export default Hero;
