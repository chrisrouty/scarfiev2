import styled from "styled-components";

export const Styled = styled.div`
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 100px;
    margin-top: -120px;
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      > div{
        padding: 0 40px;
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        flex-direction: vertical;
        height: 120px;
        margin-right: 15px;
      }
    }
    p{
      font-weight: bold;
      font-family: ${props => props.theme.fonts.roboto};
      font-size: ${props => props.theme.sizes.fs30};
      display: block;
      span{
        display: block;
        font-weight: normal;
        font-size: ${props => props.theme.sizes.fs20};
      }
    }
    a{
      font-size: ${props => props.theme.sizes.fs12};
      text-decoration: underline;
      display: block;
      margin-top: 10px;
      color: #000000;
    }
    .iconLeft{ 
      position: absolute;
      top: 0;
      left: 0;
      transform: rotate(45deg);
    }
    .iconRight{
      position: absolute;
      bottom: 0;
      right: 0;
      transform: rotate(45deg);
    }
`;