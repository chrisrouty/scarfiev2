import styled from "styled-components";

export const Styled = styled.div`
    max-width: ${props => props.isWidthFull ? '100%' : '1480px'};
    margin: 0 auto;
`;