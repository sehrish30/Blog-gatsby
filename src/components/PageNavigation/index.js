import React from 'react';
import { Link } from 'gatsby';

//Icons
import LeftIcon from 'images/arrow-left.svg'; //Now need to optimize by gatsby image compoenent
import RightIcon from 'images/arrow-right.svg';

//Styles
import {
  PageNavigationWrapper,
  ImgWrapper,
  Current,
} from './PageNavigation.styles';

// currentPage 2 send empty string because homepage"/" so next page "/1"
const PageNavigation = ({ currentPage, numPages }) => (
  <PageNavigationWrapper>
    <ImgWrapper>
      {currentPage > 1 && (
        <Link to={`/${currentPage === 2 ? '' : currentPage - 1}`}>
          <input type="image" alt="left-nav" src={LeftIcon} />
        </Link>
      )}
    </ImgWrapper>

    <Current>
      <p>
        {currentPage}/{numPages}
      </p>
    </Current>
    <ImgWrapper>
      {currentPage !== numPages && (
        <Link to={`/${currentPage + 1}`}>
          <input type="image" alt="right-nav" src={RightIcon} />
        </Link>
      )}
    </ImgWrapper>
  </PageNavigationWrapper>
);

export default PageNavigation;
