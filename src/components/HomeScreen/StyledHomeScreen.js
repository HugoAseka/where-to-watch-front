import styled from "styled-components"




export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 100vw;
    height: 100vh;

`
export const Header = styled.div`
    width: 90vw;
    height: 80px;
    background: red;
    color:yellow;
`
export const Logo = styled.div`
    width: 20vw;
    height: inherit;
    background-color: purple;
    font-size: 50px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    h1{
        font-size: inherit;
    }
`;

export const SearchBar = styled.input`
    width: 30vw;
    height: inherit;
    
`