import styled, {css} from "styled-components";

const isTitleSlider = css`
    bottom: -50px;
    left: -25px;
    z-index: 9;
    position: relative;
`;

const isCenter = css`
    left: 50%;
    transform: translate(-50%, 0);
    position: relative;
`;

const bgWhite = css`
    background: #fff;
    color: #000;
`;

export const Styled = styled.div`
    padding: 25px;
    display: inline-block;
    text-align: center;
    font-family: ${props => props.theme.fonts.amelya};
    font-size: ${props => props.theme.sizes.fs38};
    ${props => props.bgWhite ? bgWhite : 'background: #000; color: #fff;'};
    ${props => props.isTitleSlider ? isTitleSlider : null};
    ${props => props.isCenter ? isCenter : null}; 
    
`;