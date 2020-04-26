import styled from "styled-components";

export const Styled = styled.footer`
    padding: 25px;
    a{
      font-family: ${props => props.theme.fonts.oswald};
      font-size: ${props => props.theme.sizes.fs16};
      text-transform: uppercase;
      color: #000000;
      &:hover{
        text-decoration: underline;
      }
    }
    img{
      margin-right: 15px;
    }
    ul{
      display: flex;
      align-items: center;
      li{
        margin-right: 15px;
      }
    }
`;