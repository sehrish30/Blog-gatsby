import { createGlobalStyle } from 'styled-components';
import MuliRegular from 'fonts/Muli-Regular.woff';
import MuliBlack from 'fonts/Muli-Black.woff';

export const colors = {
  white: '#f4f6ff',
  yellow: '#fbd46d',
  black: '#07031a',
  green1: '#4f8a8b',
  green2: '#a3d2ca',
  green3: '#5eaaa8',
};

export const darkTheme = {
  colors: {
    background: colors.black,
    menuBackground: colors.yellow,
    textDark: colors.green1,
    textMain: colors.green3,
    textSecondary: colors.green2,
  },
};

export const lightTheme = {
  colors: {
    background: colors.white,
    menuBackground: colors.green1,
    textDark: colors.black,
    textMain: colors.yellow,
    textSecondary: colors.green3,
  },
};

export const GlobalStyles = createGlobalStyle`
:root{
    --site-max-width: 1200px;
}

@font-face{
    font-family:'Muli Regular' ;
    src: local('Muli Regular'), local('MuliRegular'), url(${MuliRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face{
    font-family:'Muli Black' ;
    src: local('Muli Black'), local('MuliBlack'), url(${MuliBlack}) format('woff');
    font-weight: 300;
    font-style: normal;
}

body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all .5s ease;
    font-family: "Muli Regular", Arial, Helvetica, sans-serif
}

main{
    max-width: 960px;
    margin: 40px auto;
}

h1, h2, h3, h4, h5, h6{
    color: ${props => props.theme.colors.textMain};
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    transition: all .5s ease;
    letter-spacing: 1px;
}

p{
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px){
        font-size: 1.1rem;
        line-height: 1.5;
    }
}

h2{
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;

    @media screen and (min-width: 768px){
        font-size: 1.5rem;
    }
}

h3{
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px){
        font-size: 1.2rem;
    }
}

a{
    text-decoration: none;
}

`;
