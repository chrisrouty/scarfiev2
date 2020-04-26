import styled from "styled-components";

export const Styled = styled.button`
    padding: 12px;
    height: 40px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    font-family: ${props => props.theme.fonts.roboto};
    cursor: pointer;
`;