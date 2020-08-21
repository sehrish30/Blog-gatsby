import styled from "styled-components"

export const Nav= styled.ul`
display: none;
list-style-type:none;
padding:0;
font-family: "Muli Regular", Arial, Helvetica, sans-serif;
font-size: 1.2rem;

a{
    text-decoration: none;
    color: ${props=> props.theme.colors.textDark};
}

li{
    display: inline-block;
    margin-right: 20px;
    transition: opacity .5s ease;
    cursor: pointer;

    .active{
        font-weight: 800;
    }

    :last-child{
        margin-right: 0;
    }

    :hover{ 
        text-decoration: underline;
        opacity: .7;
    }
}

@media (min-width: 768px){
    display: block;
}
`