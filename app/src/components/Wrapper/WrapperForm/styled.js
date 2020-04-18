import styled from "styled-components";

export const Styled = styled.div`
    padding: 45px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        font-family: ${props => props.theme.fonts.roboto};
        font-size: ${props => props.theme.sizes.fs34};
        color: #fff;
        text-align: center;
        margin-bottom: 25px;
    }
`;