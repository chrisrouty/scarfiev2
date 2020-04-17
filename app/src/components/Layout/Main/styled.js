import styled from "styled-components";

const Styled = styled.div`
    min-height: 100%;
    max-width: 100%; 
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.main};
    overflow: hidden;
`;

export default Styled;