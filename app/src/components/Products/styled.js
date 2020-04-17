import styled, {css} from "styled-components";

const isShadowOption = css`
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
`;

const isSlider = css`
    top: -10px;
    position: relative;
    z-index: 1; 
`;

const isHideTitle = css`
    display: none;
`;

export const Styled = styled.div`
    overflow: hidden;
    position: relative;
    padding: ${props => props.isPadding ? 20 : 0}px;

    .img-item{
        width: 100%;
        display: block;
        border-radius: ${props => props.isBorderRadius ? 20 : 0}px;
        ${props => props.isShadow ? isShadowOption : null};
        margin-bottom:  ${props => props.isSlider ? 12 : 0}px;
    }
    span{
        text-align: right;
        font-weight: bold;
        margin-right: 20px;
        font-size: ${props => props.theme.sizes.fs24};
        color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.roboto};
        display: ${props => props.isHideLike ? 'none' : 'block'};
    }
    .title-product{
        top: 50px;
        left: 20px;
        padding: 15px;
        position: absolute;
        font-family: 'roboto', sans-serif;
        z-index: 2; 
        font-size: ${props => props.theme.sizes.fs18};
        ${props => props.isHideTitle ? isHideTitle : null};
    }
    a{
        .details{
            width: calc(100% - 15%);
            height: calc(100% - 15%);
            display: none;
            visibility: hidden;
            opacity: 0;
            position: absolute;
            border: 15px solid ${props => props.theme.colors.primary};
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 0.5); 
        }
        &:hover{
            .details{
                display: ${props => props.isSlider ? '' : 'block'};
                visibility: ${props => props.isSlider ? '' : 'visible'};
                opacity: ${props => props.isSlider ? '' : '1'}; 
            }
            .img-item{
                ${props => props.isSlider ? isSlider : null};
            }
        }
    }
`;