import styled from "styled-components";


const Styled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 15px;
    ul{
        display: flex;
        li{
            padding: 10px;
            font-family: ${props => props.theme.fonts.roboto};
            text-transform: uppercase;
        }
    }
`;

export default Styled;